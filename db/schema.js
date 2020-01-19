const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open',function(){
    console.log("Database is Connected")
})

let Schema =mongoose.Schema

let MenuItemsSchema =new Schema({
    title:String
})

let RestaurantSchema = new Schema({
    name:String,
    address:{street:String,zipcode:Number},
    yelpUrl:String,
    items :[MenuItemsSchema]
})

module.exports={
    RestaurantModel : RestaurantModel,
    MenuItemsModle : MenuItemsModle
} 
