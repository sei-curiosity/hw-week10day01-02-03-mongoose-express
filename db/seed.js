let Schema = require("../db/schema.js");
let Schema = require("../db/schema.js");
// let Schema = require("../db/schema.js");
let Schema =require("./schema")

let Restaurant =Schema.RestaurantModel
let MenuItem = Schema.MenuItemsModle

Restaurant.remove()
.then(()=>{
    console.log(" All Restaurant deleted ")
})
.catch(error=>{

    console.log(error)
})


MenuItem.remove()
.then(()=>{
    console.log(" All MenuItem deleted ")
})
.catch(error=>{
    console.log(error)
})

let item1 = new MenuItem({title:"coffee"})
let item2 =new MenuItem({title:"pizza"})
let item3 =new MenuItem({title:"donuts"})


let items=[item1,item2,item3]

let restaurant1 = new Restaurant({name:"mohammed",address:{street:"streetcdjsf",zipcode:99736},yelpUrl:"Url/jdjs",items:items})
let restaurant2 = new Restaurant({name:"hotdrink",address:{street:"streetmmm",zipcode:99777},yelpUrl:"Url/dlahdu",items:items})

let restaurants=[restaurant1,restaurant2]

Restaurant.insertMany(restaurants)
.then(()=>{
    console.log(`Add resturant ${restaurants}`)
})
.catch(error=>{
    console.log(error)
}) 