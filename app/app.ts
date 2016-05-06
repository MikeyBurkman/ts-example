
require('source-map-support').install();

import express = require('express');
import path = require('path');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');
 
import routes = require('./routes/index');
import users = require('./routes/users');

var port = 3000;

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);
app.use('/users', users);

//catch 404 and forward to error handler
app.use((req, res, next) => {
 var err = new Error('Not Found');
 err['status'] = 404;
 next(err);
});

// error handler
app.use((err: any, req, res, next) => {
 res.status(err.status || 500)
    .json({
     message: err.message,
     error: isDev() ? err : null
   });
});

app.listen(port, function() {
  console.log('Listening on port: ', port);
});

function isDev() {
  return (app.get('env') === 'development');
}