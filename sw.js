self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('test-cache-1')
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(['http://www.w3.org/2008/site/images/logo-w3c-mobile-lg']);
      })
  );
});
