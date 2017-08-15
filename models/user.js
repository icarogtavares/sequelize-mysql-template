'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail : true,
        notEmpty: true
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Product, {
          foreignKey: 'user_id',
          as: 'products'
        })
      }
    }
  });
  return User;
};