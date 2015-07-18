self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('test-cache-1')
      .then(function(cache) {
        console.log('Opened cache');
        console.dir(cache.addAll(['http://www.w3.org/2008/site/images/logo-w3c-mobile-lg']));
      })
  );
});

self.onfetch = function(event) {
    console.dir(event);
    event.respondWith(fetch(event.request));
};
