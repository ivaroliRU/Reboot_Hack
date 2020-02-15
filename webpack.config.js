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
    board: './src/pages/board/board.js',
    event: './src/pages/event/event.js',
    conduct: './src/pages/conduct/conduct.js',
    code: './src/pages/code/code.js',
    involvedPersonnel: './src/pages/involvedPersonnel/involvedPersonnel.js',
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
      // template: './src/pages/about/about.html',
      template: './src/pages/index/index.html',
      inject: true,
      chunks: ['about'],
      filename: 'about.html'
    }),
    new HtmlWebPackPlugin({
      // template: './src/pages/faq/faq.html',
      template: './src/pages/index/index.html',
      inject: true,
      chunks: ['faq'],
      filename: 'faq.html'
    }),
    new HtmlWebPackPlugin({
      // template: './src/pages/error/error.html',
      template: './src/pages/index/index.html',
      inject: true,
      chunks: ['error'],
      filename: 'error.html'
    }),
    new HtmlWebPackPlugin({
      // template: './src/pages/team/team.html',
      template: './src/pages/index/index.html',
      inject: true,
      chunks: ['team'],
      filename: 'team.html'
    }),
    new HtmlWebPackPlugin({
      // template: './src/pages/confirmation/confirmation.html',
      template: './src/pages/index/index.html',
      inject: true,
      chunks: ['confirmation'],
      filename: 'confirmation.html'
    }),
    new HtmlWebPackPlugin({
      // template: './src/pages/sponsors/sponsors.html',
      template: './src/pages/index/index.html',
      inject: true,
      chunks: ['sponsors'],
      filename: 'sponsors.html'
    }),
    new HtmlWebPackPlugin({
      // template: './src/pages/board/board.html',
      template: './src/pages/index/index.html',
      inject: true,
      chunks: ['board'],
      filename: 'board.html'
    }),
    new HtmlWebPackPlugin({
      // template: './src/pages/event/event.html',
      template: './src/pages/index/index.html',
      inject: true,
      chunks: ['event'],
      filename: 'event.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/conduct/conduct.html',
      inject: true,
      chunks: ['conduct'],
      filename: 'conduct.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/code/code.html',
      inject: true,
      chunks: ['code'],
      filename: 'code.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/involvedPersonnel/involvedPersonnel.html',
      // template: './src/pages/index/index.html',
      inject: true,
      chunks: ['involvedPersonnel'],
      filename: 'involvedPersonnel.html'
    }),
  ]
};