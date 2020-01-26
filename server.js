const express = require('express') // getting framework express
const app = express() //loading the framework express
const db = require('./config/db') //initiating db connection
const logger = require('morgan') //logger for debugging 
const bodyParser = require('body-parser') 
const UserController = require('./controllers/restaurants_controller')


app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(logger('dev'))
app.use('/', UserController)
app.listen(3000)