import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createServer } from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");

async function getFreePort() {
  const server = createServer();
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });

  const address = server.address();
  assert.ok(address && typeof address === "object", "Could not reserve a local test port");
  const { port } = address;
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  return port;
}

const port = await getFreePort();
const baseUrl = `http://127.0.0.1:${port}`;
let serverOutput = "";
const server = spawn(
  process.execPath,
  [nextBin, "start", "--hostname", "127.0.0.1", "--port", String(port)],
  {
    cwd: root,
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    stdio: ["ignore", "pipe", "pipe"],
  },
);

for (const stream of [server.stdout, server.stderr]) {
  stream.setEncoding("utf8");
  stream.on("data", (chunk) => {
    serverOutput = (serverOutput + chunk).slice(-4000);
  });
}

async function waitForServer() {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Next.js server exited early.\n${serverOutput}`);
    }

    try {
      const response = await fetch(
        `${baseUrl}/api/learning-content?classId=class-10&subjectId=mathematics&type=modules`,
      );
      if (response.status === 200) return;
    } catch {
      // The server may still be starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(`Timed out waiting for Next.js.\n${serverOutput}`);
}

async function getJson(pathname, expectedStatus = 200) {
  const response = await fetch(`${baseUrl}${pathname}`);
  assert.equal(response.status, expectedStatus, `${pathname} returned an unexpected status`);
  return { response, body: await response.json() };
}

try {
  await waitForServer();

  const { response: moduleResponse, body: moduleBody } = await getJson(
    "/api/learning-content?classId=class-10&subjectId=mathematics&type=modules",
  );
  assert.match(
    moduleResponse.headers.get("cache-control") ?? "",
    /s-maxage=3600/,
    "Public learning modules should keep the shared one-hour cache policy",
  );
  assert.ok(Array.isArray(moduleBody.modules) && moduleBody.modules.length > 0, "Class 10 Mathematics should return lessons");

  for (const module of moduleBody.modules) {
    assert.ok(module.id.startsWith("class-10-mathematics-"), `Wrong class/subject leaked into modules: ${module.id}`);
    assert.equal(module.syllabusAligned, false, `${module.id} must not claim official syllabus alignment`);
    assert.equal(module.verification, "starter-content-not-syllabus-verified");
    assert.ok(Array.isArray(module.sourceIds) && Array.isArray(module.sources));
    assert.ok(typeof module.ageAppropriateGuidance === "string" && module.ageAppropriateGuidance.length > 0);
    assert.ok(
      module.sources.every((source) => module.sourceIds.includes(source.id)),
      `${module.id} returned a source that was not declared by the module`,
    );
  }

  const { body: questionBody } = await getJson(
    "/api/learning-content?classId=class-10&subjectId=mathematics&type=questions",
  );
  assert.ok(Array.isArray(questionBody.questions) && questionBody.questions.length > 0, "Class 10 Mathematics should return practice questions");
  for (const question of questionBody.questions) {
    assert.ok(question.id.startsWith("class-10-math-"), `Wrong class/subject leaked into questions: ${question.id}`);
    assert.equal(question.syllabusAligned, false, `${question.id} must not claim official syllabus alignment`);
    assert.ok(Number.isInteger(question.correctIndex));
    assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length);
    assert.ok(typeof question.explanation === "string" && question.explanation.trim().length > 0);
  }

  const invalidClass = await getJson(
    "/api/learning-content?classId=class-99&subjectId=mathematics&type=modules",
    400,
  );
  assert.ok(typeof invalidClass.body.error === "string");

  await getJson(
    "/api/learning-content?classId=class-10&subjectId=unknown&type=modules",
    400,
  );
  await getJson(
    "/api/learning-content?classId=class-10&subjectId=mathematics&type=unknown",
    400,
  );

  console.log("PASS: learning-content API returns class-scoped lessons and questions.");
  console.log("PASS: syllabus-verification labels, source metadata, explanations, and cache headers are preserved.");
  console.log("PASS: unsupported class, subject, and content type return HTTP 400.");
} finally {
  server.kill("SIGTERM");
  await new Promise((resolve) => {
    if (server.exitCode !== null) return resolve();
    server.once("exit", resolve);
    setTimeout(() => {
      if (server.exitCode === null) server.kill("SIGKILL");
      resolve();
    }, 3000).unref();
  });
}
