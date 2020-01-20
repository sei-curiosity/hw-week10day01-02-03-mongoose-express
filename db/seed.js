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
RestaurantModel.insertMany(allrestaurant)
.then(()=>{
    console.log(`Restaurant added ${allrestaurant.length} to database`)
})
.catch((error) => {
    console.log(error)
})