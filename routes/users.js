var express = require('express');
var usersController = require('../controllers').users;

var router = express.Router();

router.route('/')
  .get(usersController.findAll)
  .post(usersController.save);

router.route('/:id')
  .get(usersController.findOne)
  .put(usersController.update)
  .delete(usersController.delete);

module.exports = router;
