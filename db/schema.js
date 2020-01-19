const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/yum", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("database successfully connected"));

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
  MenuItem,
  db
};
