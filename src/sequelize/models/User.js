const Sequelize = require('sequelize')
const sequelize = require('../db')
const Model = Sequelize.Model

class User extends Model {
}

User.init(
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {sequelize, modelName: 'user'}
)

