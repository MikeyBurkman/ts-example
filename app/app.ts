
require('source-map-support').install();

import express = require('express');
import path = require('path');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');

import errors = require('./errors');

import baseRoutes = require('./routes/index');
import usersRoutes = require('./routes/users');
import errorRoutes = require('./routes/error');

const port = 3000;

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', baseRoutes);
app.use('/users', usersRoutes);
app.use('/error', errorRoutes);

//catch 404 and forward to error handler
app.use((req, res, next) => {
  next(new errors.NotFoundError());
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
  console.log('Listening on port: ', port);
});

function isProd() {
  return (app.get('env') === 'production');
}
