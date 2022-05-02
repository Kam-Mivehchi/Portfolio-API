const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')


class Skills extends Model { }

Skills.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        skill: {
            type: DataTypes.STRING,
        },
        category: {
            type: DataTypes.STRING
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'skills',
    }
)

module.exports = Skills