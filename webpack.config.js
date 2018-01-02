module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: './client/dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};