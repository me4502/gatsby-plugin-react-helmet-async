[![NPM package downloads](https://img.shields.io/npm/dt/gatsby-plugin-react-helmet-async)](https://www.npmjs.com/package/gatsby-plugin-react-helmet-async)
[![Depfu](https://img.shields.io/depfu/Collabsalot/gatsby-plugin-react-helmet-async)](https://depfu.com/repos/github/Collabsalot/gatsby-plugin-react-helmet-async)
![Code size](https://img.shields.io/github/languages/code-size/Collabsalot/gatsby-plugin-react-helmet-async)
![Repo size](https://img.shields.io/github/repo-size/Collabsalot/gatsby-plugin-react-helmet-async)

# gatsby-plugin-react-helmet-async

## Description

Provides drop-in support for server rendering data added with [React Helmet Async](https://github.com/staylor/react-helmet-async).

React Helmet Async is a component which lets you control your document head using their React component.

With this plugin, attributes you add in their component, e.g. title, meta attributes, etc. will get added to the static HTML pages Gatsby builds.

This is important not just for site viewers, but also for SEO — title and description metadata stored in the document head is a key component used by Google in determining placement in search results.

## How to install

If you're using NPM, replace `yarn add` with `npm i`:

```bash
yarn add react-helmet-async gatsby-plugin-react-helmet-async
```

`react-helmet-async` requires your `react` and `react-dom` to be at least `16.6.0`. If they're older than that, you'll need to upgrade them:
 
```bash
yarn add react@^16.6.0 react-dom@^16.6.0
```

### Using TypeScript

This package includes its own types, as do `gatsby` and `react-helmet-async`. To get types for the other packages, you'll need to install them separately:

```bash
yarn add -D @types/react @types/react-dom
```

## How to use

Just add the plugin to the plugins array in your `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet-async`,
  ]
}
```
