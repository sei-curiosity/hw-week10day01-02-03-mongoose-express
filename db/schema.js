const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

let Schema = mongoose.Schema

let menuItemSchema = new Schema({
    title: String
})

let restaurantSchema = new Schema({
    name: String,
    address: {street: String, zipcode: Number},
    yelpUrl: String,
    items: []
})


let resturantModel = mongoose.model("Resturant", restaurantSchema)
let menuItemModel = mongoose.model("MenuItem", menuItemSchema)

module.exports = {
    resturantModel: resturantModel,
    menuItemModel: menuItemModel
}