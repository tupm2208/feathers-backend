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
      primaryKey: true
    },
    reservationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    keepBox: {
      type: DataTypes.INTEGER,
      allowNull: false
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
