# blog

This is cvan's blog.


## Installing

1. Install the Node dependencies:

    npm install

2. Install [Wintersmith](https://github.com/jnordberg/wintersmith) globally (for easier CLI invocation):

    npm install -g wintersmith


## Composing

Wintersmith provides a local server that can be used during development to see changes on the fly:

    wintersmith preview

1. Create a new directory in the `contents/articles` directory.
2. Create a Markdown file called `index.md`.
3. Compose.
4. You can preview the post: http://localhost:8080/articles/<my-article-slug>/


## Publishing

1. Generate the static content:

        wintersmith build

2. Publish that directory somewhere. You could put it in the GitHub Pages branch - or in a separate branch with a Webhook to automatically deploy to Amazon S3 or somewhere. (I have a command I run: `npm run publish`.)


## Advanced Local Development

To run the server on a different port, set the `MOZ_GAMES_HOST` and `MOZ_GAMES_PORT` environment variables.

To temporarily disable Service Worker caching (for ease of testing), run this from your browser console:

    localStorage.disable_sw = '1'

To resume Service Worker caching, run this from your browser console:

    delete localStorage.disable_sw
