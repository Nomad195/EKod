const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("express-flash");
const dotenv = require("dotenv");

dotenv.config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//connect mongodb
let db_uri = process.env.DB_URI || 'mongodb+srv://obian_fra:Success1995@iamcluster-z7fna.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(db_uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(console.log("database connected"))
    .catch(err => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(flash());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

