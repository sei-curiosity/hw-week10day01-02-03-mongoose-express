const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/library")
const express = require('express') 
const app = express() 
const logger = require('morgan') 
const bodyParser = require('body-parser') 
const controller = require('./db/controler') 

const db = mongoose.connection

db.on('error', ()=> console.error)
db.once('open', ()=> console.log("conneted"))

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use('/', controller)
app.listen(3000 , () => console.log('lets get started'))