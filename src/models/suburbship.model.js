// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const suburbship = sequelizeClient.define('suburbship', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seperatedCode: {
      type: DataTypes.STRING,
      allowNull: true,
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
    isNightShip: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    freeShip: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    premiumValue: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    note: {
      type: DataTypes.STRING + ' CHARSET utf8 COLLATE utf8_unicode_ci',
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
  suburbship.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    suburbship.belongsTo(models.users, {
      foreignKey: 'userId'
    })
  };

  return suburbship;
};
