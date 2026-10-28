#!/usr/bin/env node
/**
 * Lightweight production smoke test. Run after `npm run build`.
 * Uses Node's built-in fetch and starts the built Next.js server locally.
 */
import { spawn } from "node:child_process";

const port = process.env.SMOKE_TEST_PORT || "3210";
const baseUrl = `http://127.0.0.1:${port}`;
const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", port],
  { stdio: "ignore", env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" } },
);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function request(path) {
  const response = await fetch(new URL(path, baseUrl), {
    headers: { accept: "application/json, text/html" },
    signal: AbortSignal.timeout(5000),
  });
  return response;
}

async function main() {
  let ready = false;
  try {
    for (let attempt = 0; attempt < 30; attempt += 1) {
      if (server.exitCode !== null) {
        throw new Error(`Next.js server exited early with code ${server.exitCode}`);
      }
      try {
        const response = await request("/");
        if (response.ok) {
          ready = true;
          break;
        }
      } catch {
        // The server may still be starting; retry briefly.
      }
      await sleep(1000);
    }
    if (!ready) throw new Error("Production server did not become ready within 30 seconds.");

    const home = await request("/");
    const html = await home.text();
    if (home.status !== 200 || !html.includes("Kerala Learning Hub")) {
      throw new Error(`Homepage smoke test failed (HTTP ${home.status}; expected product title).`);
    }
    console.log("PASS homepage returns HTTP 200 and product branding.");

    const manifestResponse = await request("/manifest.webmanifest");
    const manifest = await manifestResponse.json();
    if (!manifestResponse.ok || manifest.name !== "Kerala Learning Hub" ||
        manifest.start_url !== "/" || !Array.isArray(manifest.icons) || manifest.icons.length === 0) {
      throw new Error("Web app manifest is missing required product metadata.");
    }
    console.log("PASS web app manifest is served and has app metadata.");

    const serviceWorkerResponse = await request("/sw.js");
    const serviceWorker = await serviceWorkerResponse.text();
    if (!serviceWorkerResponse.ok || !serviceWorker.includes("klh-learning-api-v1") ||
        !serviceWorker.includes("/offline.html")) {
      throw new Error("Offline service worker is missing its learning-content or fallback strategy.");
    }
    console.log("PASS offline service worker is served.");

    const offlineResponse = await request("/offline.html");
    const offlineHtml = await offlineResponse.text();
    if (!offlineResponse.ok || !offlineHtml.includes("Let’s reconnect.")) {
      throw new Error("Friendly offline fallback page is missing.");
    }
    console.log("PASS offline fallback page is served.");

    const iconResponse = await request("/icon.svg");
    const iconSvg = await iconResponse.text();
    if (!iconResponse.ok || !iconSvg.includes("<svg")) {
      throw new Error("App icon is missing or invalid.");
    }
    console.log("PASS lightweight app icon is served.");

    const modulesResponse = await request("/api/learning-content?classId=class-1&subjectId=mathematics&type=modules");
    const modulesPayload = await modulesResponse.json();
    if (!modulesResponse.ok || !Array.isArray(modulesPayload.modules) || modulesPayload.modules.length === 0) {
      throw new Error("Learning modules API did not return a non-empty module list for Class 1 Mathematics.");
    }
    console.log(`PASS learning modules API returns ${modulesPayload.modules.length} module(s).`);

    const questionsResponse = await request("/api/learning-content?classId=class-1&subjectId=mathematics&type=questions");
    const questionsPayload = await questionsResponse.json();
    if (!questionsResponse.ok || !Array.isArray(questionsPayload.questions)) {
      throw new Error("Practice questions API returned an unexpected response shape.");
    }
    for (const question of questionsPayload.questions) {
      if (!Array.isArray(question.options) || question.options.length < 2 ||
          !Number.isInteger(question.correctIndex) ||
          question.correctIndex < 0 || question.correctIndex >= question.options.length) {
        throw new Error(`Practice question has an invalid answer structure: ${question.id || "(unknown id)"}`);
      }
    }
    console.log(`PASS practice questions API response shape (${questionsPayload.questions.length} question(s)).`);

    const invalidResponse = await request("/api/learning-content?classId=not-a-class&subjectId=mathematics&type=modules");
    const invalidPayload = await invalidResponse.json();
    if (invalidResponse.status !== 400 || typeof invalidPayload.error !== "string") {
      throw new Error("Learning content API did not reject an unsupported class with HTTP 400.");
    }
    console.log("PASS invalid learning-content request is rejected with HTTP 400.");
    console.log("Production smoke tests passed.");
  } finally {
    server.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error("Production smoke tests failed:", error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
