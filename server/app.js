/* eslint no-console: 0 */
import express from 'express';
import path from 'path';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

require('./api/routes/static')(app);
require('./api/routes/hot')(app);
require('./api/routes/router')(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Server running on port', port, 'on', process.env.NODE_ENV);
});
