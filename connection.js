const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('cbs', 'root', 'Root@1993', {
    host: 'localhost',
    dialect: 'mysql'
});

async function testMysqlConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

testMysqlConnection().then()

const connection = {
    sequelize: sequelize
}

exports.connection = connection;
