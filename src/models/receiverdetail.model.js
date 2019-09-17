// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const receiverdetail = sequelizeClient.define('receiverdetail', {
    receiverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: false
    },
    reservationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    keepBox: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  receiverdetail.removeAttribute('id');

  // eslint-disable-next-line no-unused-vars
  receiverdetail.associate = function (models) {
    receiverdetail.associate = function (models) {
        receiverdetail.belongsTo(models['receivers'],{
          foreignKey: 'receiverId',
        })
      };
  };

  return receiverdetail;
};
