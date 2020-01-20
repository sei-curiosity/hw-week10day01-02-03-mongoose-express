let Schema = require("../db/schema.js");

let RestaurantModel = Schema.RestaurantModel ;

let MenuItemsModel= Schema.MenuItemsModel;

RestaurantModel.remove({})
  .then(() => {
    console.log('All Restaurant deleted!')
  })
  .catch((error) => {
    console.log(error)
  })

  MenuItemsModel.remove({})
  .then(() => {
    console.log('All MenuItems deleted!')
  })
  .catch((error) => {
    console.log(error)
  })
  

const Restaurant1 = new RestaurantModel({name:"Pizza Hut",address:{ street:" road king fahad" ,  zipcode:"123"}, yelpUrl:"https://www.pizzahut.com.sa/" })
const Restaurant2 = new RestaurantModel({name:"KFC",address:{ street:" road king abdullh" ,  zipcode:"1234"}, yelpUrl:"https://www.kfc.com/" })


const projects = [Restaurant1, Restaurant2, ]

