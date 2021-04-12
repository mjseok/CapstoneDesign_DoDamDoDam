const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const port = process.env.PORT || 3000;

module.exports = {
  // 개발환경
  mode: 'development',

  // 애플리케이션 시작 경로
  entry: './src/index.js',

  // 번들된 파일 경로
  output: {
    publicPath: '/',
    filename: 'bundle.[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  // 개발 서버 설정
  devServer: {
    host: 'localhost',
    port: port,
    open: true, // open page when start
    historyApiFallback: true,
  },
};
