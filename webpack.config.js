const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:{
    index: './src/pages/index/index.js',
    about: './src/pages/about/about.js',
    faq: './src/pages/faq/faq.js',
    error: './src/pages/error/error.js',
    team: './src/pages/team/team.js',
    confirmation: './src/pages/confirmation/confirmation.js',
    sponsors: './src/pages/sponsors/sponsors.js',
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
  output: {
    publicPath: "/",
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
    new HtmlWebPackPlugin({
      template: './src/pages/team/team.html',
      inject: true,
      chunks: ['team'],
      filename: 'team.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/confirmation/confirmation.html',
      inject: true,
      chunks: ['confirmation'],
      filename: 'confirmation.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/sponsors/sponsors.html',
      inject: true,
      chunks: ['sponsors'],
      filename: 'sponsors.html'
    }),
  ]
};