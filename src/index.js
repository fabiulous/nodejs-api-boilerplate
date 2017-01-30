import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import PrettyError from 'pretty-error';
import config from './config';
import models from './models';
import routes from './routes';

const ENV = config.environment;
const port = config.port;

const app = express();
app.server = http.createServer(app);

// Register Node.js middleware
// =============================================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (ENV === 'development') {
  app.use(errorHandler({ dumpExceptions: true, showStack: true }));
} else {
  app.use(errorHandler());
}

// Register Routes
// =============================================================================
// all routes will be prefixed with /api
app.use('/api', routes);

// Error handling
// =============================================================================
if (ENV === 'development') {
  const pe = new PrettyError();
  pe.skipNodeFiles();
  pe.skipPackage('express');

  app.use((err, req, res, next) => {
    console.log(pe.render(err)); // eslint-disable-line no-console{
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// START THE SERVER
// =============================================================================
/* eslint-disable no-console */
models.sync().catch(err => console.error(err.stack)).then(() => {
  app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`);
  });
});
/* eslint-enable no-console */
