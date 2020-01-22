// let mongoose = require("mongoose")
let Schema = require("../db/schema.js");
let db = mongoose.connection
let RestaurantModel = Schema.RestauranModel
let MenueItemsModel = Schema.MenueModel


const menue1 = new MenueItemsModel ({
    title:"Alfredo pasta"
})
const menue2 = new MenueItemsModel ({
    title:"Fettuccine pasta"
})
const menue3 = new MenueItemsModel ({
    title:"Masala pasta"
})

const menues = [menue1, menue2, menue3]
///

const restaurant1 = new RestauranModel({
    name: "Pasta Factory",
    address:{
        street: "xx",
        zipcode: 444
    },
    yelpUrl:"xxx",
    items: menues
})

const restaurant2 = new RestauranModel({
    name: "Noodles Factory",
    address:{
        street: "xx",
        zipcode: 444
    },
    yelpUrl:"xxx",
    items: menues
})

const restaurant3 = new RestauranModel({
    name: "Applebees",
    address:{
        street: "yy",
        zipcode: 555
    },
    yelpUrl:"yyy",
    items: menues
})

const restaurants = [restaurant1,restaurant2,restaurant3]


ResturantModel.insertMany(restaurants)
  .then(() => {
    console.log(`Added ${restaurants.length} restaurants to database`)
  })
  .catch((error) => {
    console.log(error)
  })
  .then(()=> db.close())

//   exports