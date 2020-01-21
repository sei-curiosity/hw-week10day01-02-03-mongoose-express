var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
const Restaurant= Schema.RestaurantModel

const show = (name) => {
    Restaurant.find({name:name})
    .then(restaurant=> {
        console.log(restaurant)
    })
    .catch(console.error)
    .then(done)
}

const show = (zipCode ) => {
    Restaurant.find({zipCodee:zipCode})
    .then(restaurant=> {
        console.log(restaurant)
    })
    .catch(console.error)
    .then(done)
}

const destroy = (id) => {
    Student.findById(id)
    .then(restaurant => {
        return restaurant.remove()
    })
    .catch(console.error)
    .then(done)
}

