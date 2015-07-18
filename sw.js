self.onfetch = function(event) {
    console.dir(event);
    event.respondWith(fetch(event.request));
};
