const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')


class About extends Model { }

About.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        about: {
            type: DataTypes.STRING(1234),
            allowNull: false,
        },
        top_skills: {
            type: DataTypes.STRING,
            allowNull: false,

        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'about',
    }
);

module.exports = About;