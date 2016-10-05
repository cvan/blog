# blog

This is [cvan's blog](https://blog.cvan.io/).


## Installing

Install the Node dependencies:

```sh
npm install
```

## Composing

[Wintersmith](http://wintersmith.io/) provides a local server that can be used during development to see changes live after you edit and save files:

```sh
npm start
``

1. Load [`https://localhost:8080/`](https://localhost:8080/).
2. Create a new directory in the `contents/articles` directory.
3. Create a Markdown file called `index.md`.
4. Write an article.
5. You can then preview the post: [`http://localhost:8080/articles/<my-article-slug>/`](`http://localhost:8080/articles/<my-article-slug>/`)


## Previewing

To generate the static content:

```sh
npm run build
```

## Publishing

To deploy the static content to [production](https://blog.cvan.io/):

```sh
npm run deploy
```

## Advanced local development

To temporarily disable Service Worker caching (for ease of testing), run this from the Console of your browser's Developer Tools:

```js
localStorage.disable_sw = '1';
```

To enable Service Worker caching, run this from your browser console:

```js
delete localStorage.disable_sw;
```
