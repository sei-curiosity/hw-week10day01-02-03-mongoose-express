const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('database successfully connected')
  })

  let Schema = mongoose.Schema // this is a schema method

  let MenuItemsSchema = new Schema ({
    title: String
})

  let RestaurantSchema = new Schema ({
    name: String,
    address:{
        street: String,
        zipcode: Number
    },
    yelpUrl: String,
    items: [MenuItems]
})

let RestaurantModel =mongoose.model("Restaurant", RestaurantSchema)

let MenuItemsModel =mongoose.model("MenuItem", MenuItemsSchema)


