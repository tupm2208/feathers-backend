// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
    const sequelizeClient = app.get('sequelizeClient');
    const reservationdetail = sequelizeClient.define('reservationdetail', {
        reservationId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: false
        },
        productId: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: false
        },
        link: {
            type: DataTypes.STRING,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        keepBox: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0
        },
        code: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0
        },
        webFee: {
            type: DataTypes.FLOAT,
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
    reservationdetail.removeAttribute('id');

    // eslint-disable-next-line no-unused-vars
    reservationdetail.associate = function (models) {
        reservationdetail.belongsTo(models.reservations, {
            foreignKey: 'reservationId'
        })
    };

    return reservationdetail;
};
