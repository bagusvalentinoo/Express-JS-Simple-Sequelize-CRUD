const dotenv = require('dotenv')
const { Sequelize } = require('sequelize')
dotenv.config()

const sequelize = new Sequelize(
    String(process.env.DB_NAME),
    String(process.env.DB_USER),
    String(process.env.DB_PASSWORD),
    {
        host: String(process.env.DB_HOST),
        dialect: String(process.env.DB_DIALECT),
    }
)

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.')
}).catch((error) => {
    console.error('Unable to connect to the database: ', error)
})

module.exports = sequelize
