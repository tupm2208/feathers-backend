// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
    const sequelizeClient = app.get('sequelizeClient');
    const reservations = sequelizeClient.define('reservations', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        yenAmount: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        account: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deposit: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        exchangeRate: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        note: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        receiverId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        edit: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        finishedDate: {
            type: DataTypes.DATE,
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
    reservations.associate = function (models) {
        reservations.hasMany(models['reservationdetail'], {
            as: 'reservationdetail',
            foreignKey: 'reservationId',
            targetKey: 'id'
        })

        reservations.hasMany(models.bills, {
            as: 'bills',
            foreignKey: 'reservationId',
            targetKey: 'id'
        })

        reservations.belongsTo(models.receivers, {
            foreignKey: 'receiverId'
        })

        reservations.belongsTo(models.users, {
            foreignKey: 'userId'
        })
    };

    return reservations;
};
