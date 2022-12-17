const Sequelize = require('sequelize');

const DB = require('../config/db');

const Users = DB.define('users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    category: {
        type: Sequelize.ENUM,
        values: ['veg', 'non-veg', 'both'],
        defaultValue: 'veg',
        allowNull: false
    },
    role: {
        type: Sequelize.ENUM,
        values: ['customer', 'restaurant'],
        defaultValue: 'customer',
        allowNull: false
    },
    address:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    mobile:{
        type: Sequelize.STRING,
        allowNull:true
    },
    image:{
        type: Sequelize.STRING,
        allowNull:true
    }
}, { timestamps: false });

module.exports = Users;