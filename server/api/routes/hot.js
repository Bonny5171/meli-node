import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../../../webpack.config';

const compiler = webpack(config);

module.exports = (app) => {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    stats: {
      colors: true,
    },
  }));
  app.use(webpackHotMiddleware(compiler));
};
