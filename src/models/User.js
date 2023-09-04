const {DataTypes} = require('sequelize')
const sequelize = require('../utils/connection')


const User = sequelize.define('user', {
    first_name:{
        type: DataTypes.CHAR,
        allowNull: false
    },

    last_name:{
        type: DataTypes.CHAR,
        allowNull: false
    },

    email:{
        type: DataTypes.CHAR,
        allowNull: false
    },

    password:{
        type: DataTypes.CHAR,
        allowNull: false
    },

    birthday:{
        type: DataTypes.DATEONLY,
        allowNull: false
    }
})

module.exports = User