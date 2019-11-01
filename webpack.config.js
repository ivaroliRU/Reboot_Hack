const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:{
    index: './src/pages/index/index.js',
    about: './src/pages/about/about.js',
    faq: './src/pages/faq/faq.js',
    error: './src/pages/error/error.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/pages/index/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/about/about.html',
      inject: true,
      chunks: ['about'],
      filename: 'about.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/faq/faq.html',
      inject: true,
      chunks: ['faq'],
      filename: 'faq.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/error/error.html',
      inject: true,
      chunks: ['error'],
      filename: 'error.html'
    }),
  ]
};