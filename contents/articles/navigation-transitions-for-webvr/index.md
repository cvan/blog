As VR content can cover significant portion of users' FOV, we need graceful transitions between content in #WebVR.

# Chris Lord's prototype demo
* http://chrislord.net/index.php/2015/04/24/web-navigation-transitions/
* https://github.com/Cwiiis/gaia-navigator
* http://chrislord.net/files/mozilla/gaia-navigator/examples/
* http://cwiiis.github.io/gaia-navigator/
* https://gitlab.com/Cwiiis/gaia-navigator/

# Debut at Chrome Developer Summit 2014
* [Experimental (deprecated) spec](https://docs.google.com/document/d/17jg1RRL3RI969cLwbKBIcoGDsPwqaEdBxafGNYGwiY4/edit)
* [Demo: Navigation Transitions in Chrome on Android](https://www.youtube.com/watch?v=v0xRTEf-ytE#t=968)
* [Demo: Chrome on Android w/ Android's Activities Transitions API + the experimental Navigation Transitions API](https://www.youtube.com/watch?v=v0xRTEf-ytE#t=1075)
Future App Model: Advanced Service Worker (Chrome Dev Summit 2016)
https://youtu.be/J2dOTKBoTL4?t=1814

# Chrome Developer Summit 2016

![](https://bitsofco.de/content/images/2016/11/ezgif.com-optimize.gif)
https://youtu.be/J2dOTKBoTL4?t=1814

The way the API would work will be by introducing a new event, navigate, that we can listen for in the window. For example, a simple cross-fade transition could be written like this -

```javascript
// Listen for a new "navigate" event
window.addEventListener('navigate', event => {
  // Keep the current document alive until this Promise is resolved
  event.transitionUntil(

    // Get the new window
    event.newWindow.then(newWin => {
      if (!newWin) return;

      // assuming newWin.document.interactive means DOM ready
      return newWin.document.interactive.then(() => {
        return newWin.document.documentElement.animate([
          {opacity: 0}, {opacity: 1}
        ], 1000).finished;
      });
    })
  );
});
```

// Example from https://github.com/jakearchibald/navigation-transitions

https://github.com/MozVR/horizon/issues/40


–

# The problem

If you want to transition between pages, your current option is to fetch the new page with JavaScript, update the URL with [`pushState`](https://developer.mozilla.org/en-US/docs/Web/API/History_API#The_pushState()_method), and animate between the two.

Having to reimplement navigation for a simple transition is a bit much, often leading developers to use large frameworks where they could otherwise be avoided. This proposal provides a low-level way to create transitions while maintaining regular browser navigation.

# Goals

* Enable complex transitions.
* Allow transitions to start while the next page is being fetched.
* Allow transitions to differ between navigation from clicking a link, back button, forward button, reload button, etc.
* Allow transitions to cater for a non-zero scroll position in the navigated-to page.

# Experiments, talks & reading materials

[![Animation from Jake Archibald's talk, Future App Model: Advanced Service Worker (Chrome Dev Summit 2016)](https://bitsofco.de/content/images/2016/11/ezgif.com-optimize.gif "Animation from Jake Archibald's talk, Future App Model: Advanced Service Worker (Chrome Dev Summit 2016)")](https://www.youtube.com/watch?v=J2dOTKBoTL4&t=1907)

## Web Navigation Transitions (2014): CSS-based experiment by Google Chrome team
* [**Spec:** Initial (deprecated) spec for experimental Web Navigation Transitions prototype (2014)](https://docs.google.com/document/d/17jg1RRL3RI969cLwbKBIcoGDsPwqaEdBxafGNYGwiY4/edit)
* [**Talk (video):** Ryan Schoen's talk, Wicked Fast: Performance investments (Chrome Dev Summit 2014)](https://www.youtube.com/watch?v=v0xRTEf-ytE)
    * [**Demo (video):** Web Navigation Transitions in Chrome on Android](https://www.youtube.com/watch?v=v0xRTEf-ytE&t=968)
    * [**Demo (video):** Android's Activities Transitions API and experimental Web Navigation Transitions in Chrome on Android](https://www.youtube.com/watch?v=v0xRTEf-ytE&t=1075)

## Web Navigation Transitions (2015): CSS-based proposal by Chris Lord (Mozilla, Firefox OS)
* [**Article:** Web Navigation Transitions by Chris Lord (Mozilla)](http://chrislord.net/index.php/2015/04/24/web-navigation-transitions/)
* [**Examples:** Web Navigation Transitions examples (emulated with CSS Animations, custom CSS media queries, events, `<iframe>`s, `postMessage`, etc.)](http://chrislord.net/files/mozilla/gaia-navigator/examples/)
* [**Code samples:** Source code of "Gaia Nagiator" Web Navigation Transitions examples](https://github.com/Cwiiis/gaia-navigator)

## Web Navigation Transitions (2016): New proposal by Jake Archibald (Google Chrome)
* [**Talk (video):** Jake Archibald's talk, Future App Model: Advanced Service Worker (Chrome Dev Summit 2016)](https://www.youtube.com/watch?v=J2dOTKBoTL4&t=1815)
    * [**Demo (video)** Web Navigation Transitions in Chrome on Android](https://www.youtube.com/watch?v=J2dOTKBoTL4&t=1907)

# API sketch

```js
window.addEventListener('navigate', event => {
  // …
});
```

The `navigate` event fires when the document is being navigated in a way that would replace the current document.

* `event.type` - One of the following strings:
  * `back` - User is navigating back.
  * `forward` - User is navigating forward.
  * `reload` - Reload-triggered navigation.
  * `normal` - Not one of the above.
* `event.url` - The URL being navigated to. An empty string if the URL is of another origin.
* `event.newWindow` - A promise for a `WindowProxy` being navigated to. Resolves with `undefined` if another origin is involved in the navigation (i.e., the initial URL or redirects). Rejects if the navigation fails. Cancels if the navigation cancels (dependent on cancelable promises).
* `event.transitionUntil(promise)` - Keep this document alive and potentially visible until `Promise` settles, or once another origin is involved in the navigation (i.e., the initial URL or redirects).

**Note:** The same-origin restrictions are to avoid new URL leaks and timing attacks.

# Simple cross-fade transition

```js
window.addEventListener('navigate', event => {
  event.transitionUntil(
    event.newWindow.then(newWin => {
      if (!newWin) return;

      // assuming newWin.document.interactive means DOM ready
      return newWin.document.interactive.then(() => {
        return newWin.document.documentElement.animate([
          {opacity: 0}, {opacity: 1}
        ], 1000).finished;
      });
    })
  );
});
```

# Slide-in/out transition

```js
window.addEventListener('navigate', event => {
  if (event.type == 'reload') return;

  const fromRight = [
    {transform: 'translate(100%, 0)'},
    {transform: 'none'}
  ];

  const toLeft = [
    {transform: 'none'},
    {transform: 'translate(-100%, 0)'}
  ];

  const fromLeft = toLeft.slice().reverse();
  const toRight = fromRight.slice().reverse();

  event.transitionUntil(
    event.newWindow.then(newWin => {
      if (!newWin) return;

      return newWin.document.interactive.then(() => {
        return Promise.all([
          newWin.document.documentElement.animate(
            event.type == 'back' ? fromLeft : fromRight, 500
          ).finished,
          document.documentElement.animate(
            event.type == 'back' ? toRight : toLeft, 500
          ).finished
        ]);
      });
    })
  );
});
```

# Immediate slide-in/out transition

The above examples don't begin to animate until the new page has fetched and become interactive. That's ok, but this API allows the current page to transition while the new page is being fetched, improving the perception of performance:

```js
window.addEventListener('navigate', event => {
  if (event.type == 'reload') return;

  const newURL = new URL(event.url);

  if (newURL.origin !== location.origin) return;

  const documentRect = document.documentElement.getBoundingClientRect();

  // Create something that looks like the shell of the new page
  const pageShell = createPageShellFor(event.url);
  document.body.appendChild(pageShell);

  const directionMultiplier = event.type == 'back' ? -1 : 1;

  pageShell.style.transform = `translate(${100 * directionMultiplier}%, ${-documentRect.top}px)`;

  const slideAnim = document.body.animate({
    transform: `translate(${100 * directionMultiplier}%, 0)`
  }, 500);

  event.transitionUntil(
    event.newWindow.then(newWin => {
      if (!newWin) return;

      return slideAnim.finished.then(() => {
        return newWin.document.documentElement
          .animate({opacity: 0}, 200).finished;
      });
    })
  );
});
```

# Rendering & interactivity

During the transition, the document with the highest `z-index` on the `documentElement` will render on top. If `z-index`es are equal, the entering document will render on top. Both `documentElement`s will have stacking contexts.

If the background of `html`/`body` is transparent, the underlying document will be visible through it. Beneath each document is the browser's default background (usually white).

During the transition, the render-box of the documents will be clipped to that of the viewport size. This means `html { transform: translate(0, -20px); }` on the top document will leave a 20-pixel gap at the bottom, through which the bottom document will be visible. After the transition, rendering switches back to using the regular model.

We must guarantee that the new document doesn't visibly appear until `event.newWindow`'s reactions have completed.

As for interactivity, both documents will be at least scrollable, although developers could prevent this using `pointer-events: none` or similar.

Apologies for the hand-waving.

# Place within the navigation algorithm

It feels like the event should fire immediately after step 10 of [`navigate`](https://html.spec.whatwg.org/multipage/browsers.html#navigate). If `transitionUntil` is called, the browser would consider the pages to be transitioning.

The rest of the handling would likely be in the ["update the session history with the new page" algorithm](https://html.spec.whatwg.org/multipage/browsers.html#update-the-session-history-with-the-new-page). The unloading of the current document would be delayed but without delaying the loading of the new document.

Yep, more hand-waving.

# Potential issues & questions

* Can transitions/animations be reliably synchronised between documents? They at least share an event loop.
* Any issues with firing transitions/animations for nested contexts?
* What if the `Promise` passed to `transitionUntil` never resolves? Feels like it should have a timeout.
* What happens on low-end devices that can't display two documents at once?
* What if the navigation is cancelled (e.g., use of a `Content-Disposition` response header). `event.newWindow` could also cancel.
* How does this interact with browsers that have a [back-forward cache](https://developer.mozilla.org/en-US/docs/Working_with_BFCache)?
* How should redirects be handled?
* How should interactivity during the transition be handled?
* During a sliding transitions, is it possible to switch a fake shell for the actual page's document mid-transition? Feels like this is something the [Animation API](https://www.w3.org/TR/web-animations-1/) should be able to do.



–


Questions:

elapsedTime

WebGL
in-VR

"lobby screen"?

> Chris, interesting proposal! Curious, have you considered any scenarios where an exit/entry transition can be triggered at points other then “page finished loading” – e.g. in parallel with a navigation, or after some timeout? For local apps (like Gaia) the latency is not a problem, so waiting for the other page to be “ready” is likely not a problem.. but that doesn’t hold for the broader web use case, where latencies can be quite high, and where a transition can actually help “hide” some of that latency.

> Indeed, one of the revisions I want to make to the spec is a keyword to define when the transition should start – either on-load or immediate (also, z-index of the page, to decide stacking order, rather than hard-coded). I’ll probably update the spec in git tomorrow 🙂



How could the User Agent disable Navigation Transitions?
  Pop-up blocker

Service Worker dependency?

hinting
<meta http-equiv> + response header
https://wiki.whatwg.org/wiki/MetaExtensions
manifest

resource hinting

preloading


media queries
  based on screen size, `media` type, form factor

Should UA context menus/browser interstitials interrupt transitions (e.g., `alert`, Basic Auth, UIs for Permissions, Geolocation, `getUserMedia`, etc. APIs)?

Proposed non-normative text for interrupting transitions, skipping or stepping through them


separate event reason for `window.open` or `window.location.reload()` or changing `window.location`


Set a browser timeout for transition. Perhaps it should be the same as or fractional of the UA's request timeout? If I'm on site A and a user clicks on a link to his/her banking site, I could throw up a transition that toggles the visibility of a phishy login form masquerading as from the page of site B (or its entering transition if it has one). What will the URL be during the transition? Is that enough for user peace of mind?

Would exiting the page but changing protocols to a non-http:/https:/file: protocol still allow a transition to happen (i.e., would `navigate` get fired)? Example: installing a browser extension.


# Prevent attacks on users' history
I could create a site with a bunch of links to a page with only one `:visited` links being visible and clickable.


# Transition fingerprinting (timing attacks)
If I know a site has a transition of a predictable transition duration, I could listen for `navigate` to know where the user may have come from.

# Using SVG for transitions

# Support Presentation API

# Behavior in Fullscreen API

Should the transition happen before or after Fullscreen mode has exited between cross-origin navigation?

# Status of transitions

Use existing Web Animations/Transitions API?

0 Transition has stopped.
1 Transition has been successfully applied.
2 Transition is playing.

# Behavior with WebGL content

Should `requestAnimationFrame` continue to run or can it begin before transition starts/finishes?

# Should a user be able to invoke a `navigate` event (i.e., transitions) outside of a user-initiated gesture?

