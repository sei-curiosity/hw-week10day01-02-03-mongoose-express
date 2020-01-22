const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


//Schemas

const RestaurantSchema = new mongoose.Schema({
    name: String,
    address: {
        street: String, 
        zipcode: Number
    },
    yelpUrl: String,
    items: [MenuItemsSchema]
})

const MenuSchema = new mongoose.Schema({
    title: String
})

//models

const MenuModel = mongoose.model("Menu",MenuSchema)
const RestaurantModel = mongoose.model("Restaurant",RestaurantSchema)

module.exports = {
    RestaurantModel: RestaurantModel,
    MenuModel: MenuModel
}