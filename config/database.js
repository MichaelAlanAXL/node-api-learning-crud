const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_demo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been establihsed successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

testConnection();

module.exports = sequelize;