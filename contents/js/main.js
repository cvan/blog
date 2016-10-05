(function () {
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
})();
