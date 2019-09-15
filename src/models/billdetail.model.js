// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const billdetail = sequelizeClient.define('billdetail', {
    billId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    keepBox: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }

  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  billdetail.removeAttribute('id');
  // eslint-disable-next-line no-unused-vars
  billdetail.associate = function (models) {
    billdetail.belongsTo(models['billdetail'],{
      foreignKey: 'billId',
    })
  };

  return billdetail;
};
