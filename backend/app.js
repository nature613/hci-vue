var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var logger = require('morgan');
const auth = require('./auth')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var writeRouter = require('./routes/write');
var simpleRouter = require('./routes/simple');
var testRouter = require('./routes/test')
var deepRouter = require('./routes/deep')
var searchRouter = require('./routes/search')

var app = express();
app.use(require('connect-history-api-fallback')())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/write',writeRouter);
app.use('/simple',simpleRouter)
app.use('/test',testRouter);
app.use('/deep',deepRouter);
app.use('/search',searchRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
