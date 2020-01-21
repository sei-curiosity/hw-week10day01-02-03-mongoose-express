const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum',
{useNewUrlParser: true , useUnifiedTopology: true } );



const db = mongoose.connection;
db.on('error', 
console.error.bind(console, 'connection error:'));

let MenuItemsSchema = new mongoose.Schema ({
    title: String



})
let RestaurantSchema = new mongoose.Schema ({
    name: String,
    address: {street: String, zipcode:Number},
    yelpUrl: String,
    items:[MenuItemsSchema]
})

let MenuModel = mongoose.model("Menue", MenuItemsSchema)
let RestaurantModel = mongoose.model("Restaurant", RestaurantSchema)

module.exports = {
    RestaurantModel: RestaurantModel,
    MenuModel: MenuModel
}



