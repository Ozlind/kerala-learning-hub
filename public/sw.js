/* Lightweight offline support. Only public learning content is cached. */
const SHELL_CACHE = "klh-shell-v1";
const PAGE_CACHE = "klh-pages-v1";
const API_CACHE = "klh-learning-api-v1";
const ASSET_CACHE = "klh-static-assets-v1";
const CORE_ASSETS = ["/offline.html", "/manifest.webmanifest", "/icon.svg"];
const ACTIVE_CACHES = [SHELL_CACHE, PAGE_CACHE, API_CACHE, ASSET_CACHE];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key.startsWith("klh-") && !ACTIVE_CACHES.includes(key))
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response.ok) {
          const cache = await caches.open(PAGE_CACHE);
          await cache.put(request, response.clone());
        }
        return response;
      } catch {
        return (await caches.match(request))
          || (await caches.match("/"))
          || (await caches.match("/offline.html"));
      }
    })());
    return;
  }

  if (url.pathname === "/api/learning-content") {
    event.respondWith((async () => {
      const cache = await caches.open(API_CACHE);
      try {
        const response = await fetch(request);
        if (response.ok && response.headers.get("content-type")?.includes("application/json")) {
          await cache.put(request, response.clone());
        }
        return response;
      } catch {
        const cached = await cache.match(request);
        if (cached) return cached;
        return new Response(JSON.stringify({
          error: "This lesson has not been saved for offline use yet. Reconnect and open it once to save it."
        }), {
          status: 503,
          headers: { "Content-Type": "application/json; charset=utf-8" }
        });
      }
    })());
    return;
  }

  const isStaticAsset = url.pathname.startsWith("/_next/static/")
    || ["script", "style", "image", "font"].includes(request.destination);
  if (isStaticAsset) {
    event.respondWith((async () => {
      const cache = await caches.open(ASSET_CACHE);
      const cached = await cache.match(request);
      if (cached) return cached;
      const response = await fetch(request);
      if (response.ok) await cache.put(request, response.clone());
      return response;
    })());
  }
});
