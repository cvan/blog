// Open external links in a new tab.
Array.prototype.slice.call(
  document.querySelectorAll('[href^="//"], [href*="://"]')
).forEach(function (link) {
  link.setAttribute('target', '_blank');
});
