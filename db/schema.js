const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
  title: String
});

const restaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [menuItemSchema]
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = {
  Restaurant,
  MenuItem
};
