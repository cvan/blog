---
layout: post
title: "Using flexbox to sort search results"
date: 2014-04-07 22:50:02
categories: css flexbox perf
---

I try to always avoid round trips to the server when possible. Naturally, I’m a fan of client-side filtering and searching. (If that’s your type of thing, check out [lunr.js](http://lunrjs.com/) if you haven't already.)

This is typically how it goes:

1. Make an `XMLHttpRequest` `GET` request to retrieve a JSON document containing an array of objects (aka search documents), each containing a unique identifier (such as `_id`).
2. `JSON.parse` the response body to get an array of objects.
3. Initialise your filtering/searching script (which ideally should live in a web worker).
4. Populate a search index by passing the array of objects to your search indexer, which takes care of creating an inverted index and so forth and so on.
5. Web worker `postMessage`s back to the main script to announce that the search index is populated and ready for queries.
6. The results area is replaced with generated HTML for each list item (e.g., `document.querySelector('ul.results').innerHTML = resultsHTML`).
5. Search queries (typically, upon keypress in an `input[type=search]` field) are passed to the search web worker.
6. Web worker `postMessage`s back to the main script an array of ids, which corresponds to ids of the search documents that match the given query (sorted by relevance).
7. Based on the new results, the main script replaces the `innerHTML` of the results area again.

Instead of physically rearranging existing DOM nodes, or destroying existing nodes and re-rendering new ones, we can reorder search results using one CSS property: flexbox’s [order](https://developer.mozilla.org/en-US/docs/Web/CSS/order).



The perfect use case: rendering filtered data, such as client-side search results, without having to reconsistute the DOM based on sort order.


## Caveat

If you copy the entire document to your clipboard, you’ll notice that the pasted text appears in the order in which the text is represented in the DOM, not in the visual order set by flexbox.

You can still select the text content of each flexbox-ordered item - just not text that overlaps to another flexbox-ordered item.

If you print the document, the visual order set by flexbox order is preserved. But why are you printing this? And why do you still own a printer?
