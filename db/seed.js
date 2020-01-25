let mongoose = require('mongoose')
let Schema = require("./schema")
let db = mongoose.connection
let  RestaurantModel = Schema.RestaurantModel
let  MenueModel = Schema.MenueModel

const disconnect = ()=> db.close()

let Breakfast1 = new MenueModel({ title: "Egg & Cheese" })
let Breakfast2 = new MenueModel({ title: "Haloumi & Turkey" })
let Breakfast3 = new MenueModel({ title: "Pancakes & Cream" })

let breakfasts = [Breakfast1, Breakfast2, Breakfast3]

// let McDonaldsRest = new RestaurantModel({  // create a new document
//     name: "McDonalds", 
//     address: {street: "Albazouri", zipcode: 66666}, 
//     yelpUrl: "IDK", 
//     items: breakfasts 
// })

// McDonaldsRest.save()
// .then((restaurant) => {
//     console.log(restaurant)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .then(disconnect)

// another create document way
// const create = () => {
// RestaurantModel.create({ name: "Urth",
//     address: {street: "Altahliah", zipcode: 11111},
//     yelpUrl: "IDK",
//     items: breakfasts 
//     })
// .then((restaurant) => {
//     console.log(restaurant)
//   })
// .catch((error) => {
//     console.log(error)
//   })
// .then(disconnect)
// } 
