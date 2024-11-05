self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('humidity-app-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/humidity_chart.png',
        '/banner_image.png',
        '/manifest.json',
        '/style.css'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
