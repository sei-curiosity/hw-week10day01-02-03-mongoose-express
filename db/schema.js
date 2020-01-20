const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum',
{useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))

let Schema = mongoose.Schema
let MenuItemsSchema = new Schema ({
    title: String
})
let RestaurantSchema = new Schema ({
    name: String,
    address: - {street: String, zipcode: Number},
    yelpUrl: String,
    items: [MenuItemsSchema]
})

let MenuItemsModel = mongoose.model("Menu", MenuItemsSchema)
let RestaurantModel = mongoose.model("Restaurant", RestaurantSchema)

module.exports = {
    MenuItemsModel: MenuItemsModel,
    RestaurantModel: RestaurantModel
}
