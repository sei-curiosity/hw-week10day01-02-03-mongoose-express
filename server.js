// require express
const express = require('express')
const app = express()
// require database configuration logic
const db = require('./db/db')
// require route files
const Routers = require('./routes/rest_routes');

//bodyParser 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( {extended:true} ))
app.use(bodyParser.json())

// register route files
app.use(Routers)

//server
app.listen(3000,() => {
    console.log(`Server running at port 3000`)
})