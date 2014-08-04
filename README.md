# blog

This is cvan's blog.


## Installation

You should use [`pip`](https://pypi.python.org/pypi/pip). If you don't have that installed, do that now:

    sudo easy_install pip

Now to install Markdown:

    # Install gulp globally.
    npm install -g gulp

    # Install Python dependencies (i.e., Markdown).
    pip install -r requirements.txt


## Composing

To rebuild on the fly the `.html` files (and `index.html`) every time a `.md` file is saved, run this command:

    gulp

1. Place a Markdown (`.md`) file in the `drafts` directory.
2. Compose.
3. Save.
4. Open the post's corresponding `.html` file to preview the post.


## Publishing

1. Move the Markdown file from the `drafts` directory to the root directory.
2. Then to generate a static HTML file (e.g., `2014-07-04-post.html` for `2014-07-04-post.md`):

        _ 2014-07-04-post.md

3. Publish.
