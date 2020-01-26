// const mongoose = require('mongoose');
// const Schema = require("./db/schema.js");
// const databaseName = "yum"
// const url = `mongodb://localhost/${databaseName}`
// mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true})
// const db = mongoose.connection
// const closeConnection =()=>{
//     db.close()
// }

// const Restaurant = Schema.RestaurantModel

// const show = (name)=>{
//     Restaurant.findOne({name:name})
//     .then(restaurant =>{
//         console.log(restaurant)
//     })
//     .catch(console.error)
//     .then(closeConnection)
// }
// // show("Almadinah")


// const index = (zipcode)=>{
//     Restaurant.find({"address.zipcode":zipcode})
//     .then(restaurant =>{
//         console.log(restaurant)
//     })
//     .catch(console.error)
//     .then(closeConnection)
// }
//  index(3072)

// const update = (id,field,value)=>{
//     Restaurant.findById(id)
//     .then(restaurant =>{
//         restaurant[field]=value
//         return restaurant.save()
//     })
//     .catch(console.error)
//     .then(closeConnection)
// }
// // update("5e249b32e76a182c6364749b",'name','Shawerma +')

// const distroy =(id)=>{
// Restaurant.findById(id)
// .then(restaurant =>{
//     return restaurant.remove()
// })
// .catch(console.error)
// .then(closeConnection)
// }
// // distroy('5e249b32e76a182c6364749b')

// //not complete yet
// const create = (id,title) =>{
//     Restaurant.findById(id)
//     then(restaurant =>{
//         restaurant.items
//     })
// }