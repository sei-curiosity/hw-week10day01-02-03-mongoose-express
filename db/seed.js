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


// I will wrap them in a function create for usability
const create = (name, address, yelpUrl, items) => {
    const restaurantParams = {
        name: name,
        address: address,
        yelpUrl: yelpUrl,
        items:  items 
        }
    RestaurantModel.create(restaurantParams)
    .then((restaurant) => {
        console.log(restaurant)
    })
    .catch((error) => console.log(error))
    .then(disconnect)
     

}   // end create func  

// create("Burger King", {street: "ALkhaleej", zipcode: 555555}, "IDK", breakfasts)


const find = (restaurantName) => {
    RestaurantModel.findOne({name: restaurantName}) // a condition where the key name is equal to the parameter restaurantName
    .then( (restaurant) => {
        console.log(`You are looking for ${restaurant} restaurant`)
    })
    .catch((error) => console.log(error))
    .then(disconnect)
} // end func

// find("Urth")


const findAll = (zipcodeInput) => {
    RestaurantModel.find({zipcode: zipcodeInput})
    .then( (restaurants) => {
        console.log(restaurants)
    })
    .catch( (error) => console.error)
    .then(disconnect)
} // end func

// findAll(11111)

const update = (rest_id, updates) => {
        RestaurantModel.findByIdAndUpdate(rest_id, updates)
        .then((student) => {
            console.log(student)
        })
        .catch( (error) => console.error)
        .then(disconnect)
} // end func

const destroy = (rest_id) => {
    RestaurantModel.findByIdAndRemove(rest_id)
  .then(findAll)
  .catch( (error) => console.error)
  .then(disconnect)

} // end func