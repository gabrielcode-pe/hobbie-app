// Define User Model
  module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define('users', {

        // Attributes
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING

        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    }, 
    {
        scopes: {
            withOutPassword: {
                attributes: { exclude: ['password'] },
            }
        }
    });

    return User;
  }

