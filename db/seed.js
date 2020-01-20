let Schema = require("../db/schema.js");

let Restaurant = Schema.RestaurantModel;
let Menueitem = Schema.MenueitemsModel;

// Restaurant.remove({})
// .then(()=> {
//     console.log('All restaurants deleted')
// })
// .catch((error) => {
//  console.log(error)
// })

// Menueitem.remove({})
// .then(()=> {
//     console.log('All menue lists deleted')
// })
// .catch((error) => {
//  console.log(error)
// })

let item1 = new Menueitem({title: "Beef burger"})
let item2 = new Menueitem({title: "Hotdog"})
let item3 = new Menueitem({title: "Fish & fries"})
let item4 = new Menueitem({title: "Grilled Chicken"})
let item5 = new Menueitem({title: "Coffee"})

const items = [item1, item2, item3, item4, item5]


let restaurant1 = new Restaurant({name: "Metro Caffe", address:{street:"takhassusi st", zipcode:"55"}, yelpUrl:"www.Mcaffee.com", items: items})
let restaurant2 = new Restaurant({name: " Grilly Food", address:{street:"olaya st", zipcode:"66"}, yelpUrl:"www.grilly.com", items: items})

const restaurants = [restaurant1, restaurant2];

// Restaurant.insertMany(restaurants)
// .then(() => {
//     console.log(`Added ${restaurants.length} restaurants to database.`)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
  

Restaurant.findOne({name: "Metro Caffe"})
.then((restaurant) => {
  console.log(`restaurant name is: ${restaurant} `)
})
.catch((error) => {
  console.log(error)
})

Restaurant.find({"address.zipcode":55})
.then((restaurant) => {
  console.log(`the ZCode of restaurant: ${restaurant} `)
})


// this is update 
const update = (id,field ,value) => {
  Restaurant.findById(id)
  .then(restaurant => {
      restaurant.address[field] = value
     return restaurant.save()
  })
  .catch(console.error)
  .then(restaurant=>{
    console.log(`updated to >>>> ${restaurant}`)
  })

}
update('5e25c951c5ac35286ca84b80','street','king fahad st')


// this is destroy 
const destroy = (id) => {
  Restaurant.findById(id)
  .then(restaurant => {
      return restaurant.remove()
  })
  .catch(console.error)

}
destroy('5e25c951c5ac35286ca84b80')

