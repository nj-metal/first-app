const Sequelize = require('sequelize')


const sequelize = new Sequelize(
    'nj_first_app', //DB
    'root', //User
    '',     //Pass
    {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
)

//const sequelize = new Sequelize('mysql://root:@localhost/nj_first_app');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize