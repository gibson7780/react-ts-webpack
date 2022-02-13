const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, './'),
  },
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: 'html-loader',
      //     },
      //   ],
      // },
      // {
      //   test: /.jsx$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: { presets: ['@babel/preset-react', '@babel/preset-env'] },
      //   },
      // },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  devServer: {
    open: true,
    host: 'localhost',
    historyApiFallback: true,
    port: port,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/index.html',
      // favicon: 'public/favicon.ico',
      filename: './index.html',
    }),
  ],
};
