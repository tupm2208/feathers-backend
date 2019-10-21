// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const bills = sequelizeClient.define('bills', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reservationId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    receiveDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deposit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    exchangeRate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    shipFee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    surcharge: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 0
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    unitPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    billName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  bills.associate = function (models) {
    bills.hasMany(models['billdetail'],{
      as: 'billdetail',
      foreignKey: 'billId',
      targetKey: 'id'
    })

    bills.belongsTo(models.reservations, {
        foreignKey: 'reservationId'
    })

    bills.belongsTo(models.users, {
        foreignKey: 'userId'
    })
  };

  return bills;
};
