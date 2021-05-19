const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx'],
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },

  entry: {
    app: ['./src/index.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
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
    ],
  },
  // set plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DoDamDoDam',
      scriptLoading: 'defer',
      template: './src/index.html',
    }),
  ],
};
