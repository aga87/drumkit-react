// const cacheName = 'v1';
// const self = this;

// // Install
// self.addEventListener('install', () => {
//   console.log('Service Worker: Installed');
// });

// // Activate
// self.addEventListener('activate', (e) => {
//   //   console.log('Service Worker: Activated'); // Testing
//   // Remove unwanted caches
//   e.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cache) => {
//           if (cache !== cacheName) {
//             // console.log('Service Worker: Clearing Old Cache'); // Testing
//             return caches.delete(cache);
//           }
//         })
//       );
//     })
//   );
// });

// // Fetch
// self.addEventListener('fetch', (e) => {
//   //   console.log('Service Worker: Fetching'); // Testing
//   e.respondWith(
//     fetch(e.request)
//       .then((res) => {
//         // Make copy/clone of response
//         const resClone = res.clone();
//         // Open cache
//         caches.open(cacheName).then((cache) => {
//           // Add the response to cache
//           cache.put(e.request, resClone);
//         });
//         return res;
//       })
//       .catch(() => caches.match(e.request).then((res) => res))
//   );
// });

const CACHE_NAME = 'v1';

const self = this;

// Install

self.addEventListener('install', () => {});

// Activate and remove old caches

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheKeys) => {
      return Promise.all(
        cacheKeys
          .filter((cacheKey) => cacheKey !== CACHE_NAME)
          .map((cacheKey) => caches.delete(cacheKey))
      );
    })
  );
});

// Cache on network response:
// If a request doesn't match anything in the cache, get it from the network,
// send it to the page, and add it to the cache at the same time.

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(e.request).then(
        (response) =>
          response ||
          fetch(e.request).then((res) => {
            cache.put(e.request, res.clone());
            return res;
          })
      );
    })
  );
});
