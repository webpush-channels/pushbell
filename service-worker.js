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
