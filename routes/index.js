var express = require('express');
var usersRouter = require('./users');
var router = express.Router();

router.use('/users/', usersRouter);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

module.exports = router;
