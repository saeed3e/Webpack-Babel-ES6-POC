module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
    {
      loader: "babel-loader",
      exclude: /(node_modules|bower_components)/,
      // Only run `.js` and `.jsx` files through Babel
      test: /\.jsx?$/,
      // Options to configure babel with
      query: {
        presets: ['es2015'],
      }
    },
  ]
  }
};
