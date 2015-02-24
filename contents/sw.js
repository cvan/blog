// To polyfill `caches.{add,addAll,match}` for Chrome 40.
// As of this writing, Firefox's Service Worker implementation has
// no `caches` support yet (and this polyfill doesn't polyfill that).
importScripts('/js/serviceworker-cache-polyfill.js');

var CACHE_NAME = 'cvan-blog';
var CACHE_VERSION = 2;
var CACHE_KEY = CACHE_NAME + '-v' + CACHE_VERSION;


self.onactivate = function (event) {
  caches.keys().then(function (cacheNames) {
    return Promise.all(
      cacheNames.map(function (cacheName) {
        if (cacheName.indexOf(CACHE_NAME) === -1) {
          return;
        }

        if (cacheName !== CACHE_KEY) {
          console.log('Deleting out of cache:', cacheName);
          return caches.delete(cacheName);
        }
      })
    );
  });
};


self.onfetch = function (event) {
  var request = event.request;

  event.respondWith(

    caches.match(request).then(function (response) {

      if (response) {
        console.log('  Found response in cache:', response);
        return response;
      }

      console.log('  No response for %s found in cache. Fetching from network:',
                  event.request.url);

      return fetch(event.request).then(function (response) {
        console.log('    Response for %s from network: %O',
                    event.request.url, response);

        if (event.request.url.substr(-6) !== '/sw.js' && response.status < 400) {
          caches.open(CACHE_KEY).then(function (cache) {
            console.log('    Caching the response to', event.request.url);
            return cache.put(event.request, response.clone());
          }).catch(function (err) {
            console.warn('    Could not cache ' + requestURL + ': ' +
                         err.message);
          });
        } else {
          console.log('    Not caching the response to', event.request.url);
        }

        return response;
      });
    })
  );
};
