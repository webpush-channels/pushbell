// Register event listener for the 'push' event.
self.addEventListener('push', function(event) {
  const payload = event.data ? event.data.json() : {};

  event.waitUntil(
    self.clients.matchAll().then(function(clients) {
      clients.forEach(function(client) {
        client.postMessage(payload);
      });
    })
  );
});

self.addEventListener('activate', function (event) {
    // The service worker is now Active and functioning.
    console.log("sw Activate : ", JSON.stringify(event));
    // Again, ensure that this is the only active service worker for this
    // page.
    event.waitUntil(self.clients.claim());
    console.log("sw Activated: ", JSON.stringify(event));
});
