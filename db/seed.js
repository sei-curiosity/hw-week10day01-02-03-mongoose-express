let Schema = require("../db/schema.js");

const MenuItemsModel = Schema.MenuItemsModel
let RestaurantModel = Schema.RestaurantModel

const stitem = new MenuItemsModel({title:"Kebsa"})
const scitem = new MenuItemsModel({title:"Mendi"})
const thitem = new MenuItemsModel({title:"Jresh"})
const fritem = new MenuItemsModel({title:"Burger"})
const fvitem = new MenuItemsModel({title:"Fries"})

const stresaurant = new RestaurantModel ({
    name: "Romancia",
    address: {street: "King Fahad", zipcode: 14244},
    yelpUrl: "www.R.com",
    items: [stitem,thitem]
})

const scresaurant = new RestaurantModel ({
    name: "Yeman",
    address: {street: "Saba", zipcode: 14234},
    yelpUrl: "www.Y.com",
    items: [stitem,thitem,scitem]
})

const thresaurant = new RestaurantModel ({
    name: "Wow ME",
    address: {street: "Blvd", zipcode: 14241},
    yelpUrl: "www.W.com",
    items: [fritem,fvitem]
})

const allrestaurant = [stresaurant,scresaurant,thresaurant]
RestaurantModel.findOne("allrestaurant")
.then(()=>{
    console.log(`Restaurant added ${allrestaurant.length} to database`)
})
.catch((error) => {
    console.log(error)
})

RestaurantModel.findOne({name: "Wow ME"})
.then((restaurant)=>{
    console.log(`The name of the restaurant is ${restaurant} `)
})
.catch((error) => {
    console.log(error)
})

RestaurantModel.find({"address.zipcode":14244})
.then((restaurant)=>{
    console.log(`The zipCode of the restaurant is ${restaurant} `)
})
.catch((error) => {
    console.log(error)
})

const update = (id,field,value) =>
RestaurantModel.findById(id)
.then((restaurant)=>{
    restaurant.address[field] = value
    return restaurant.save()
})
.catch((error) => {
    console.log(error)
    .then(restaurant => {
        console.log(`${restaurant} updated`)
    })
})


const destroy = (id) =>
RestaurantModel.findById(id)
.then((restaurant)=>{
    return restaurant.remove()
})
.catch(console.error)
