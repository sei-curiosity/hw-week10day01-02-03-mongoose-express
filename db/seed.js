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
  let menu1 = new MenueModel({ title: "Burger" })
let  menu2 = new MenueModel({ title: "pizza" })
let  menu3 = new MenueModel({ title: "burger cheese" })

const menus = [menu1, menu2, menu3]

const Restaurant1 = new RestaurantModel({name:"Pizza Hut",address:{ street:" road king fahad" ,  zipcode:"123"}, yelpUrl:"https://www.pizzahut.com.sa/" })
const Restaurant2 = new RestaurantModel({name:"KFC",address:{ street:" road king abdullh" ,  zipcode:"1234"}, yelpUrl:"https://www.kfc.com/" })


const projects = [Restaurant1, Restaurant2, ]

const index = function(name){
  Restaurant.find()
  .then(restaurant => {
      console.log(restaurant)
  })
  .catch(console.error)
  .then(done)
}

const show = (zipcode => {
  Resaurant.find({zipCode:123})
  .catch(console.error)
  .then(done)
})

const destroy = (id) => {
  Restaurant.findById(id)
  .then(restaurant => {
    return restaurant.remove()
  })
  .catch(console.error)
  .then(done)
}

const update = (id, field, value) => {
  
  Restaurant.findById(id)
  
  .then(restaurant => {
    restaurant[field] = value    
  
      return restaurant.save()
  })
  .catch(console.error)
  .then(done)
}




