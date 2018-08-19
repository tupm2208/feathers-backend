// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const receivers = sequelizeClient.define('receivers', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    unitPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    surcharge: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    deposit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    arrivedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    edit: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  receivers.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return receivers;
};
