const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); 

let Schema = mongoose.Schema 

let Menu = new Schema ({
    title: String
})

let Restaurant = new Schema ({
name: String,
yelpUrl: String,
address:
        {
        street: String,
        zipcode: Number,
        },
items: [Menu]
})

let RestaurantModel = mongoose.model("dinner",Menu)
let MenuModel = mongoose.model("Kabab",Restaurant)


module.exports = {
    RestaurantModel: RestaurantModel,
    MenuModel: MenuModel
}

  


