const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Portfolio extends Model { }

Portfolio.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        git: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        live: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
            type: DataTypes.STRING(1234),
            allowNull: false,
        },
        tech: {
            type: DataTypes.JSON,
            allowNull: false,
        },
    }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'portfolio',
}
)

module.exports = Portfolio

