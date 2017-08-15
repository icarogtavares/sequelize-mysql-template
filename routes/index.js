var express = require('express');
var usersRouter = require('./users');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

router.use('/users/', usersRouter);

module.exports = router;