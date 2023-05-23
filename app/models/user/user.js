const { DataTypes } = require('sequelize')
const sequelize = require('../../../config/connection')

const user = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birth_place: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birth_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

sequelize.sync().then(() => {
    console.log('users table has been created, if one doesn\'t exist')
}).catch((err) => {
    console.log('error: ', err)
})

module.exports = user
