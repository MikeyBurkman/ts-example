
require('source-map-support').install();

import * as express from 'express';
import * as path from 'path';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import * as errors from './errors';

import * as baseRoutes from './routes/index';
import * as usersRoutes from './routes/users';
import * as errorRoutes from './routes/error';

const port = 3000;

const app = express();

import injectTest = require('./injectTest');
injectTest.init();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', baseRoutes);
app.use('/users', usersRoutes);
app.use('/error', errorRoutes);

//catch 404 and forward to error handler
app.use((req, res, next) => {
  next!(new errors.NotFoundError());
});

// error handler
app.use((err: any, req, res, next) => {
  res.status(err.status || 500)
    .json({
      message: err.message,
      error: isProd() ? null : err.stack
    });
});

app.listen(port, function() {
  console.log('\nListening on port: ', port);
});

function isProd() {
  return (app.get('env') === 'production');
}
