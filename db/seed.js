let Schema = require("../db/schema.js");

let Restaurant = Schema.RestaurantModel;
let Menueitem = Schema.MenueitemsModel;

Restaurant.remove({})
.then(()=> {
    console.log('All Restaurants Deleted')
})
.catch((error) => {
 console.log(error)
})

Menueitem.remove({})
.then(()=> {
    console.log('All Menue Deleted')
})
.catch((error) => {
 console.log(error)
})

let item1 = new Menueitem({title: "Burger"})
let item2 = new Menueitem({title: "Checken"})
let item3 = new Menueitem({title: "Ice cream"})
let item4 = new Menueitem({title: "Tea"})
let item5 = new Menueitem({title: "Coffee"})

const items = [item1, item2, item3, item4, item5]


let restaurant1 = new Restaurant({name: "Danken", adress:{street:"street1", zipcode:"1234"}, yelpUrl:"www.xx.com", items: items})
let restaurant2 = new Restaurant({name: " MDonates", adress:{street:"street2", zipcode:"4321"}, yelpUrl:"www.yyy.com", items: items})
let restaurant3 = new Restaurant({name: " Mohammeds", adress:{street:"street3", zipcode:"2022"}, yelpUrl:"www.mohammeds.com", items: items})
const restaurants = [restaurant1, restaurant2,restaurant3];

Restaurant.insertMany(restaurants)
.then(() => {
    console.log(`Added ${restaurants.length} restaurants to database.`)
  })
  .catch((error) => {
    console.log(error)
  })
