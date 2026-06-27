self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("element-intervention-v1").then(function(cache) {
      return cache.addAll([
        "./",
        "index.html",
        "data.js",
        "manifest.json",
        "icon.svg"
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
