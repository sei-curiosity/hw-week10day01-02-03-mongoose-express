const Schema = require("./db/schema")
const RestaurantModel = Schema.RestaurantModel
const ItemModel = Schema.ItemModel

findRestauran = (name)=>{
    let res = RestaurantModel.find({name: name})
}

findAllByZipCode = (zipcode)=>{
    let res = RestaurantModel.find
}