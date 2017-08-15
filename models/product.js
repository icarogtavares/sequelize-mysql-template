'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDecimal: true,
        min: 0
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
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