const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection')

class Contact extends Model { }

Contact.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        message: {
            type: DataTypes.STRING(1234)
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'contact',
    }
)

module.exports = Contact