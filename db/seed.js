const mongoose = require('mongoose');
let Schema = require("../model/schema");

let RestaurantModel = Schema.RestaurantModel;
let MenueitemModel = Schema.MenueitemModel;

RestaurantModel.remove({})
.then(()=> {
    console.log('All Restaurants Deleted')
})
.catch((error) => {
 console.log(error)
})

MenueitemModel.remove({})
.then(()=> {
    console.log('All Menue Deleted')
})
.catch((error) => {
 console.log(error)
})

let item1 = new MenueitemModel({title: "Burger"})
let item2 = new MenueitemModel({title: "Checken"})
let item3 = new MenueitemModel({title: "Ice cream"})
let item4 = new MenueitemModel({title: "Tea"})
let item5 = new MenueitemModel({title: "Coffee"})

const items = [item1, item2, item3, item4, item5]


let restaurant1 = new RestaurantModel({name: "Danken", adress:{street:"street1", zipcode:"1234"}, yelpUrl:"www.xx.com", items: items})
let restaurant2 = new RestaurantModel({name: " MDonates", adress:{street:"street2", zipcode:"4321"}, yelpUrl:"www.yyy.com", items: items})
let restaurant3 = new RestaurantModel({name: " Mohammeds", adress:{street:"street3", zipcode:"2022"}, yelpUrl:"www.mohammeds.com", items: items})
const restaurants = [restaurant1, restaurant2,restaurant3];

RestaurantModel.insertMany(restaurants)
.then(() => {
    console.log(`Added ${restaurants.length} restaurants to database.`)
  })
  .catch((error) => {
    console.log(error)
  })
  const create = (name,street,zipcode,yelpUrl,items) => {
    const resaurantParams = {
      name : name,
      address : {street,zipcode},
      yelpUrl : yelpUrl,
        items: items
    }
    
    Resaurant.create(resaurantParams)
    .then(resaurant => {
        console.log(resaurant)
    })
    .catch(error => console.log(error))
    .then(done)
}
// create()

const show = (name) => {
  Resaurant.find({name: "Mohammeds"})
  .then(restaurant => {
      console.log(restaurant)
  })
  .catch(console.error)
  .then(done)
}
//show()
const show = (zipCode) => {
  Resaurant.find({zipCode:2022})
  .then(restaurant => {
      console.log(restaurant)
  })
  .catch(console.error)
  .then(done)
}
//show()
const destroy = (id) => {
  Resaurant.findById(id)
  .then(restaurant => {
      return restaurant.remove()
  })
  .catch(console.error)
  .then(done)
}


const update = (id,field,value) => {
  Resaurant.findById(id)
  .then(restaurant => {
      restaurant[field] = value
      return restaurant.save()
  })
  .catch(console.error)
  .then(done)
}
index()
