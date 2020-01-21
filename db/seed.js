
let Schema = require("../db/schema.js");
let RestaurantModel = Schema.RestaurantModel
let MenuModel = Schema.MenuModel

let dinner = new MenuModel({
    title: "dinner"
})

let lunch = new MenuModel({
    title: "lunch"
})

let breakfast = new MenuModel({
    title: "breakfast"
})


let kabab = new RestaurantModel({
    name:"kabab",
    yelpUrl:"don't know what the hell doesn't that mean",
    address:
    { street:"freedom street, exit 5", zipcode: 55555},
    items:menu
})

let kabab1 = new RestaurantModel({
    name:"kabab1",
    yelpUrl:"don't know what the hell doesn't that mean",
    address:
    { street:"freedom street, exit 5", zipcode: 55555},
    items:menu
})

let kabab2 = new RestaurantModel({
    name:"kabab2",
    yelpUrl:"don't know what the hell doesn't that mean",
    address:
    { street:"freedom street, exit 5", zipcode: 55555},
    items:menu
})

let kabab3 = new RestaurantModel({
    name:"kabab3",
    yelpUrl:"don't know what the hell doesn't that mean",
    address:
    { street:"freedom street, exit 5", zipcode: 55555},
    items:menu
})


const restaurants = [kabab,kabab1,kabab2,kabab3]
let menu =[dinner,lunch,breakfast]


restaurants.insertMany(restaurant)
.then(()=>{
    console.log(`Add resturant ${restaurant}`)
})

menu.remove()
.then(()=>{
    console.log("deleted ")
})
.catch(error=>{

    console.log(error)
})


restaurants.remove()
.then(()=>{
    console.log("deleted ")
})
.catch(error=>{
    console.log(error)
})


const index = function(){
    restaurants.find()
    .then(restaurant => {
        console.log(restaurant)
    })
    .catch(console.error)
}

const update = (id,field,value) => {
    restaurants.findById(id)
    .then(restaurant => {
        restaurant[field] = value
        return restaurant.save()
    })
    .catch(console.error)
}





const destroy = (id) => {
    menu.findById(id)
    .then(menu => {
        return menu.remove()
    })
}