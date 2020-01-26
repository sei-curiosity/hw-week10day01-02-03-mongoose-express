const express = require('express')
const hbs = require('hbs')

app = express()
app.set("view engine", "hbs")
// app.use(express.static(__dirname+'/public'));

const db = require('./config/db')

const studentRouters = require("./routes/restaurant_routes")

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(studentRouters)

const port = 3000;
app.listen(port,() => {
    console.log(`Server running at port ${port}`)
})