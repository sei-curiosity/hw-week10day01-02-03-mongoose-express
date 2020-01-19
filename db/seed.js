let Schema = require("../db/schema.js");

let Restaurant = Schema.RestaurantModel;
let Menueitem = Schema.MenueitemsModel;

Restaurant.remove({})
.then(()=> {
    console.log('All restaurants deleted')
})
.catch((error) => {
 console.log(error)
})

Menueitem.remove({})
.then(()=> {
    console.log('All menue lists deleted')
})
.catch((error) => {
 console.log(error)
})

let item1 = new Menueitem({title: "Beef burger"})
let item2 = new Menueitem({title: "Hotdog"})
let item3 = new Menueitem({title: "Fish & fries"})
let item4 = new Menueitem({title: "Grilled Chicken"})
let item5 = new Menueitem({title: "Coffee"})

const items = [item1, item2, item3, item4, item5]


let restaurant1 = new Restaurant({name: "Metro Caffe", adress:{street:"takhassusi st", zipcode:"3205"}, yelpUrl:"www.Mcaffee.com", items: items})
let restaurant2 = new Restaurant({name: " Grilly Food", adress:{street:"olaya st", zipcode:"2527"}, yelpUrl:"www.grilly.com", items: items})

const restaurants = [restaurant1, restaurant2];

Restaurant.insertMany(restaurants)
.then(() => {
    console.log(`Added ${restaurants.length} restaurants to database.`)
  })
  .catch((error) => {
    console.log(error)
  })
  