const commonPaths = require('./common-paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log('commonPaths.outputPath', commonPaths.outputPath);
const config = {
  entry: {
    vendor: ['semantic-ui-react'],
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]', // 修改生成路徑
              publicPath: '../', // 修改公共路徑 打包後目錄結構css會在 css資料夾 退出一層再進到img資料夾找圖
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
  ],
};
module.exports = config;
