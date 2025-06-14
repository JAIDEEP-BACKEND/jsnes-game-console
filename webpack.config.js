module.exports = {
  entry: './src/index.js',   // or your actual entry point
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    libraryTarget: 'commonjs' // << add this
  },
  target: 'node',             // << add this
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};
