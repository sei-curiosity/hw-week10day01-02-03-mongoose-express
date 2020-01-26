const express =require('express')
const app = express()
const {db}=require('./db/schema')
const RestaurantRouter=require('./controllers/Restaurant_controller')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/',RestaurantRouter)

app.listen(3000,()=>console.log("hhhhhhhhhhhhhhhh"))