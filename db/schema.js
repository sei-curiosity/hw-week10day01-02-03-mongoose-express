const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

let Schema = mongoose.Schema

let RestaurantSchema = new Schema({
    name: String,
    address:{
        street: String,
        zipcode: Number
    },
    yelpUrl: String,
    items: []
})

let ItemSchema = new Schema({
    title: String
})

let RestaurantModel = mongoose.model("Restaurant",RestaurantSchema)
let ItemModel = mongoose.model("Item",ItemSchema)