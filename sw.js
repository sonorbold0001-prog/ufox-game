self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("ufox-cache").then(cache => {
      return cache.addAll([
        "./",
        "index.html",
        "ufo.png",
        "boosted_ufo.png",
        "astroid.png",
        "music.mp3"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});