const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum',
{useNewUrlParser: true , useUnifiedTopology: true } );



const db = mongoose.connection;
db.on('error', 
console.error.bind(console, 'connection error:'));

let RestaurantSchema = new mongoose.Schema ({
    name: String,
    address =[{street: String},{zipcode:Number}],
    yelpUrl: String,
    items:[MenuItemsSchema]
})

let MenuItemsSchema = new mongoose.Schema ({
    title: String



})
let NewRestaurantModel = mongoose.model("Restaurant", RestaurantSchema)

