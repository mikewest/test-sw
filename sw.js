self.onfetch = function(event) {
    console.dir(event);
    event.respondWith(fetch('http://www.w3.org/2008/site/images/logo-w3c-mobile-lg', { mode: 'no-cors' }));
};
