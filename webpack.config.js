const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.jsx$/,
      exclude: /node_modules/
    },
    {
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"]
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new Dotenv({
      path: './.env'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}