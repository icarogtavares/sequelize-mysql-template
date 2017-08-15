var User = require('../models/').User;

exports.findAll = (req, res, next) => {
    User.findAll({
        attributes: {
            exclude: ['created_at', 'updated_at', 'deleted_at']
        }
    })
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            next(err);
        });
};

exports.save = (req, res, next) => {
    User.create(req.body)
        .then(user => {
            res.status(201).send(user);
        })
        .catch(err => {
            next(err);
        });
};

exports.findOne = (req, res, next) => {
    User.findById(req.params.id, {
        attributes: {
            exclude: ['created_at', 'updated_at', 'deleted_at']
        }
    })
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            next(err);
        });
};

exports.update = (req, res, next) => {
    User.update(req.body, {
            fields: ['username', 'email', 'first_name', 'last_name'],
            where: {
                id : req.params.id
            }
        })
        .then((affectedCount) => {
            res.sendStatus(200);
        })
        .catch(err => {
            next(err);
        });
};

exports.delete = (req, res, next) => {
    User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.sendStatus(204);
        })
        .catch(err => {
            next(err);
        });
};