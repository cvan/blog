---
layout: post
title: "Offline, client-side search"
date: 2014-05-07 19:53:00
categories: javascript search perf
---

I always try to avoid round trips to the server whenever possible. Naturally, I'm a fan of offline, client-side filtering and searching. And by offline, I mean the search is done without making a network request. There are a few libraries in the wild to achieve this. My library of choice is [lunr.js](http://lunrjs.com/).

The typical procedure goes something like this:

1. Make an `XMLHttpRequest` `GET` request to retrieve a JSON document containing an array of objects (aka search documents), each containing a unique identifier (such as `_id`).
2. `JSON.parse` the response body to get an array of objects.
3. Initialise your filtering/searching script (which ideally should live in a web worker).
4. Populate a search index by passing the array of objects to your search indexer, which takes care of creating an inverted index and so forth and so on.
5. Web worker `postMessage`s back to the main script to announce that the search index is populated and ready for queries.
6. The results area is replaced with generated HTML for each list item (e.g., `document.querySelector('ul.results').innerHTML = resultsHTML`).
7. Search queries (typically, upon keypress in an `input[type=search]` field) are passed to the search web worker.
8. Web worker `postMessage`s back to the main script an array of ids, which corresponds to ids of the search documents that match the given query (sorted by relevance).
9. Based on the new results, the main script replaces the `innerHTML` of the results area again. (You could keep in memory the DOM of each element and change only those that you need to. Consider looking at [Facebook’s React](http://facebook.github.io/react/), which sports a fancy algorithm that keeps in memory virtual DOM and does a difference of the HTML before and after to make only the absolutely necessary DOM manipulations. Or you could use [flexsort](/css/flexbox/perf/2014/05/07/flexsort-using-flexbox-to-sort-search-results.html), the most clever technique ever invented.)

## Demo

This is a basic example of client-side search using lunr.js. In this example, I follow the approach above, firing off an XHR to fetch a JSON blob, which is then indexed into lunr.js and queried against via the web worker.

I also cache the search results by keeping a simple JS object in memory to serve as a hashtable of the queried search terms and the corresponding IDs of results matched. Any subsequent searches for the same term become near instanteous because we no longer need to call the web worker (which in turn calls lunr.js).

[Try out the demo.](http://cvan.github.io/offline-search)

## Getting fancy

Some activities to try at home:

* Use AppCache (soon Service Worker) to cache the assets, including the JSON blob, so that search works completely offline.
* For truly offline search, save the JSON blob locally using localStorage or IndexedDB (check out [localForage](https://github.com/mozilla/localForage), a simple asynchronous key-value store using IndexedDB).
* Handle pagination (for the bravest of the brave).
