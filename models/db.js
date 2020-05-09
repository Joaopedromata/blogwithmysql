const Sequelize = require('sequelize');
const sequelize = new Sequelize('postapp','root', 'gqj7789', {
    host: "localhost",
    dialect: 'mysql'
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}