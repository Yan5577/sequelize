require('dotenv').config();
// Or alternatively using ES6 syntax:-
// import * as dotenv from 'dotenv'
// dotenv.config()

const { Sequelize } = require("sequelize");

exports.sequelize = new Sequelize(process.env.MYSQL_URI);

