(function () {

// Start Service Worker.
handleSW();


// Google Analytics.
(function(c, v, a, n) {
  c.GoogleAnalyticsObject = n;

  c[n] = c[n] || function() {
    (c[n].q = c[n].q || []).push(arguments);
  }, c[n].l = 1 * new Date();

  var s = v.createElement('script');
  s.async = true;
  s.src = a;

  var m = v.getElementsByTagName('script')[0];
  m.parentNode.insertBefore(s, m);
})(window, document, 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-55541020-1', 'auto');
ga('send', 'pageview');


requestAnimationFrame(function () {
  // Defer loading of Google web fonts used for copy and code samples.
  var link;
  [
    'https://fonts.googleapis.com/css?family=Mate|Anonymous+Pro:400,700,400italic,700italic'
  ].forEach(function (url) {
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
  });

  // Defer loading of web font used for headings.
  var style = document.createElement('style');
  style.innerHTML = '@font-face {\
    font-family: akzidenz-grotesk-webfont;\
    font-style: normal;\
    font-weight: 500;\
    src: local("Akzidenz-Grotesk BQ Medium"),\
         url("/fonts/akzidenzgrotesk-medium-webfont.woff") format("woff"),\
         url("/fonts/akzidenzgrotesk-medium-webfont.ttf") format("truetype"),\
         url("/fonts/akzidenzgrotesk-medium-webfont.svg#akzidenz-grotesk_bqmedium") format("svg");\
  }';
  document.head.appendChild(style);
});


// Open external links in new tabs.
Array.prototype.slice.call(
  document.querySelectorAll('[href^="//"], [href*="://"]')
).forEach(function (link) {
  link.setAttribute('target', '_blank');
});


// Service Worker meat.
function handleSW() {
  if (!('serviceWorker' in navigator)) {
    console.warn('Service Workers are not supported in your browser');
    return;
  }

  // Service Workers require HTTPS (http://goo.gl/lq4gCo). `localhost`
  // on a custom port is whitelisted.
  if (location.protocol === 'file:') {
    // Just don't execute the SW code if we're viewing the document.
    return;
  }

  if (location.protocol === 'http:' &&
      (!location.port || location.port === '80')) {
    // Change the protocol to HTTPS if we're running on a real server.
    location.protocol = 'https:';
  }

  if (localStorage.disable_sw) {
    console.log('Service Worker is temporarily disabled');
    navigator.serviceWorker.getRegistration('/sw.js').then(function (sw) {
      if (sw) {
        console.log('Temporarily disabling Service Worker, unregistering…');
        sw.unregister();
      }
    });
    return;
  }

  navigator.serviceWorker.register('/sw.js', {scope: '/'}).then(function (sw) {
    if (navigator.serviceWorker.controller) {
      console.log('Page successfully fetched from cache by the Service Worker');
    } else {
      console.log('Page successfully registered by the Service Worker');
    }
  }).catch(function (err) {
    console.error('Service Worker error occurred: ' + err);
  });
}

})();
