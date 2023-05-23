const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const userRoutes = require('./routes/api/v1/public')
const sequelize = require('./config/connection')

// Enable CORS
app.use(cors())

// Parse request of content type - application/json
app.use(bodyParser.json())

// Parse request of content type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api/v1/', userRoutes)

// Synchronize the database and run the server
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
})
