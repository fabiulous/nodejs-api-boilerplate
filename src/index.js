import http from 'http';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import PrettyError from 'pretty-error';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config({path: path.join(__dirname, '.env') });

const ENV = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 8080;

const app = express();
app.server = http.createServer(app);

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (ENV === 'development') {
  app.use(errorHandler({ dumpExceptions: true, showStack: true }));
} else {
  app.use(errorHandler());
}

// REGISTER ROUTES -------------------------------
// all routes will be prefixed with /api
app.use('/api', routes);

//
// Error handling
// -----------------------------------------------------------------------------
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
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
