'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$",'i'],
        min: 0
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function(models) {
        Product.belongsTo(models.User, {
          foreignKey: 'user_id'
        })
      }
    }
  });
  return Product;
};