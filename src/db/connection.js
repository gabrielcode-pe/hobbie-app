require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    define: {
        timestamps: true,
        underscored: true
    }
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.User = require('../models/user.model')(sequelize, Sequelize);

  module.exports = db;
