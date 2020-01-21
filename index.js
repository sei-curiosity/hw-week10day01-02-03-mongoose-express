const mongoose = require("mongoose");
const Schema = require("./db/schema.js");

mongoose.connect("mongodb://localhost/yum", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", error => console.log("connection error:", error));
db.once("open", () => console.log("database successfully connected"));

// close connection
const close = () => db.close();

// create new restaurant
const createRestaurant = (name, address, yelpUrl, items) => {
  Schema.Restaurant.create({ name, address, yelpUrl, items })
    .then(console.log)
    .then(close)
    .catch(err => console.log("Unable to create new restaurant", err));
};

// create new menu item
const createMenuItem = title => {
  return new Schema.MenuItem({ title });
};

const items = [
  createMenuItem("Coffee"),
  createMenuItem("Crosown"),
  createMenuItem("Checkin Sandwitch"),
  createMenuItem("Four Cheese")
];

createRestaurant(
  "STARBUCKS COFFEE",
  { street: "Oliya", zipcode: 00000 },
  "yelp.com/starbucks-coffee",
  items
);
