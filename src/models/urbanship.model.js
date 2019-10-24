// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const urbanship = sequelizeClient.define('urbanship', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    remainingMoney: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shipFee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    supplementalShip: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    reservationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    note: {
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
  urbanship.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    urbanship.belongsTo(models.users, {
        foreignKey: 'userId'
    })
  };

  return urbanship;
};
