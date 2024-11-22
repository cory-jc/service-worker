// service-worker.js

const CACHE_NAME = 'furness-academy-cache-v1';
const URLs_TO_CACHE = [
    '/',
    '/furness-academy-1',  // Your portal page
    '/furness-academy-1/index.html',
    '/styles.css',  // Example CSS
    '/app.js',  // Example JS
    '/images/logo.png',  // Replace with your actual image URLs
];

// Install event - Cache static files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(URLs_TO_CACHE);
        })
    );
});

// Fetch event - Serve cached content or fetch from network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
