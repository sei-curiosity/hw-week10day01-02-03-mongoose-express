

const mongoose = require('mongoose')
let Schema = mongoose.Schema
let MenuItems = new Schema ({
    title: String
})
let RestaurantSchema = new Schema ({
  name: String,
  address: {street:String,zipcode:Number},
  yelpUrl: String,
  items: [MenuItems] 
})


let Menue = mongoose.model("Menu", MenuItems)
let Restaurant =mongoose.model("Restaurant", RestaurantSchema)
module.exports = {Restaurant,Menue}
