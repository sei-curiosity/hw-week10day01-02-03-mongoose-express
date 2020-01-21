let Schema = require("./schema");
const RestaurantModel = Schema.RestaurantModel
const ItemModel = Schema.ItemModel

let newRestauran = new RestaurantModel({
    name: "KFC",
    address:{
        street: "Some street",
        zipcode: 37130
    },
    yelpUrl: "SomeUrl",
    items: []
})