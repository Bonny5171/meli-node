require('dotenv/config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      path.resolve(__dirname, './src/main'),
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js)?$/,
        use: [{ loader: 'babel-loader' }],
        exclude: /(node_modules)/,
      },
      {
        test: /\.(css|scss|sass)$/i,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        use: [{
          loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        }, {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: { progressive: true },
            gifsicle: { interlaced: false },
            optipng: { optimizationLevel: 4 },
            pngquant: { quality: '75-90', speed: 3 },
          },
        }],
      },
    ],
  },
  devtool: 'source-map',
  context: __dirname,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_URL: JSON.stringify(process.env.API_URL),
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.css', '.scss', '.sass'],
  },
};
