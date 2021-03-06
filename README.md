# typedoc-loader

A Webpack loader that converts TypeScript to [TypeDoc](http://typedoc.org) JSON.

## Usage

```js
module: {
  rules: [{
    test: /\.ts$/,
    use: {
      loader: 'typedoc-loader',
      options: {
        // All options are passed to typedoc.
        // https://github.com/TypeStrong/typedoc#arguments
      }
  }]
}
```

See additional documentation on [using loaders](https://webpack.js.org/concepts/loaders/#using-loaders).

## Testing & contributing

Tests are run with [Jest](https://facebook.github.io/jest):

```
npm install
npm test
```

Contributions are welcome! New features or bug fixes must include tests. Try to match existing code style, or better yet, add ESLint or Prettier to this project.
