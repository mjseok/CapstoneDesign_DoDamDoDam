const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.use(cors())
const login = require('./router/login');
app.use('/loginApi', login);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
