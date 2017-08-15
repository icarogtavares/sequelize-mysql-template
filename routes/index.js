var usersRouter = require('./users');

module.exports = (app) => {
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Welcome' });
  });

  app.use('/users/', usersRouter);
}