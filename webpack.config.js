const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './client/src/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  //   extends: ['eslint:recommended', 'plugin:react/recommended'],


  plugins: [new HTMLWebpackPlugin({
    template: './client/public/index.html'
  })],

  //   parserOptions: {
  //     ecmaVersion: 2021, // or the version you are using
  //     sourceType: 'module',
  //     ecmaFeatures: {
  //       jsx: true,
  //     },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}
;