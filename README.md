# Red Hat Beyond
Red Hat's mentoring program for Computer Science students.
This repository contains various pieces of documentation including
instructions for mentors and parts of the course content.

The documents in this repository are written in [GitHub-Flavored Markdown][gfm]
with some additional shortcodes which apply [Red Hat's Design and Branding Guidelines][ux].

## Contributing

Contributions to the documentation are welcome. Please draft a focused, limited pull request
with your changes. Deploy previews are generated for each PR, so after pushing your changes, a link
to the preview will appear in the PR thread after a few minutes.

Red Hat Beyond uses [eleventy][11ty] to generate web pages from our markdown sources.

### Running Locally

If you would like to preview your changes on your local development machine while working on them,
You may run the [eleventy dev server][dev]. Changes to content will cause the localhost preview to 
automatically refresh.

#### Prerequisites

In order to run the dev server, you must have [Node.js][node] v16 or greater installed.
We recommend using [nvm][nvm] to manage node versions on your development machine.

Once node is installed, run the following command to download development dependencies to the
project's `node_modules` folder.

```shell
npm ci
```
Once that command has completed, you may start the dev server with the following command:

```shell
npm start
```

This will launch the dev server at http://localhost:8080 (assuming port 8080 is available).
Open that link in your web browser to view the preview.

[gfm]: https://github.github.com/gfm/
[ux]: https://ux.redhat.com/
[11ty]: https://11ty.dev/
[dev]: https://www.11ty.dev/docs/watch-serve/
[node]: https://nodejs.org/
[nvm]: https://github.com/nvm-sh/nvm/
