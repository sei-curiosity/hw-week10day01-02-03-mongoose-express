const express = require('express')
const app = express()

const db = require('./config/db')
//const logger = require('morgan')// good for debugger , show log of get post ,, kind of method and request 
const bodyParser = require('body-parser') //JSON - JSObj
 const RestController = require('./controller/resturent_controller')

// loading our middlewares ..
app.use(bodyParser.urlencoded({
extended:true }))
app.use(bodyParser.json())
//app.use(logger('dev'))//?

 app.use('/',RestController)

app.listen(3000)