# cvan.github.io

See about cvan.


# Installation

We use [grunt](http://gruntjs.com/):

    npm install grunt-cli -g

Then install our dependencies:

    npm install


# Development

Load from a page with an origin (i.e., a server). If you're running locally,
use grunt to fire up a local server:

    DEBUG=1 OPEN=1 grunt

To build production-ready `index.html` and the minified stylesheet,
`style.min.css`:

    grunt minify


# Deployment

To deploy the production-ready `index.html`:

    git push
