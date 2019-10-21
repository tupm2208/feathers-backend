// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const stoke = sequelizeClient.define('stoke', {
    productId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stokePrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    sold: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retailPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    wholesale: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    reservationName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    orderEmail: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  stoke.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return stoke;
};
