---
title: "Inspecting sizes of fonts in CSS"
author: cvan
date: 2020-04-11
template: article.jade
---

Want to know the <code>font-size</code> of a particular element on your web page? Look no further.

<span class="more"></span>

Drop this script in, and you are good to go. Just click on the element and you will be alerted with its font size.

<code><pre>
  &lt;script&gt;
    window.addEventListener('click', function (evt) {
      if (evt &amp;&amp; evt.target &amp;&amp; evt.target.getAttribute('data-font-size')) {
        alert(evt.target.getAttribute('data-font-size'));
      }
    });
    Array.prototype.forEach.call(document.querySelectorAll('*'), function (el) {
      el.setAttribute(
        'data-font-size',
        window.getComputedStyle(el).getPropertyValue('font-size')
      );
    });
  &lt;/script&gt;
</pre></code>