// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const surburbship = sequelizeClient.define('surburbship', {
    seperatedCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    billId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    routeType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    remainingMoney: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    receiverName: {
      type: DataTypes.STRING
    },
    receiverPhone: {
      type: DataTypes.STRING
    },
    generalAddress: {
      type: DataTypes.STRING
    },
    detailAddress: {
      type: DataTypes.STRING
    },
    isNightShip: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: false
    },
    freeShip: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: false
    },
    premiumValue: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    isGetNight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: false
    }, 
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 6
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  surburbship.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    surburbship.hasMany(models.billdetail,{
      as: 'billdetail',
      foreignKey: 'billId',
      sourceKey: 'billId'
    })
  };

  return surburbship;
};
