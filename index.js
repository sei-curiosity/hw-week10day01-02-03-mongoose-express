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

// createRestaurant(
//   "STARBUCKS COFFEE",
//   { street: "Oliya", zipcode: 00000 },
//   "yelp.com/starbucks-coffee",
//   items
// );

// find by name
const findRestaurantByName = name => {
  Schema.Restaurant.findOne({ name })
    .then(console.log)
    .then(close)
    .catch(err => console.log("Unable to create new restaurant", err));
};

findRestaurantByName(/STARBUCKS/gi);

// find by zipcode
const findByZipCode = zipcode => {
  Schema.Restaurant.find()
    .where("address.zipcode", zipcode)
    .then(console.log)
    .then(close)
    .catch(err => console.log("Unable to create new restaurant", err));
};

findByZipCode(8174961); // note: this will return array !

// update a restaurant

const updateRestaurant = (id, data) => {
  Schema.Restaurant.findByIdAndUpdate(id, data, {
    new: true,
    omitUndefined: true
  })
    .then(console.log)
    .then(close)
    .catch(console.log);
};

// updateRestaurant("5e268bac80ae351053b7d0f2", { name: "Mcdonalds" });

// delete a restaurant

const deleteRestaurant = id => {
  Schema.Restaurant.findByIdAndDelete(id)
    .then(console.log)
    .then(close)
    .catch(console.log);
};

deleteRestaurant("5e2689b7259b150d96b4f7d0");
deleteRestaurant("5e2689b7259b150d96b4f7d1");
