const express = require('express') // getting framework express
const app = express() // loading the framework express
const logger = require('morgan') // logger for debugging
const bodyParser = require('body-parser') // JSON <--> JS Objects
const resturrantController = require('./controllers/resturrantController')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(logger('dev'))

app.use('/resturrants', resturrantController)

app.listen(5000)