const logger = require('morgan');
const express = require('express');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(422).json({
    message: err.message,
  });
});

module.exports = app;
