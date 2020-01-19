let Schema = require("../db/schema.js");

let RestaurantModel = Schema.RestaurantModel
let MenuModel = Schema.MenuModel

const menu1 = new MenuModel({title:"Pizza"})
const menu2 = new MenuModel({title:"Omelet"})
const menu3 = new MenuModel({title:"Shawerma"})
const menu4 = new MenuModel({title:"Burger"})


const restaurant1 = new RestaurantModel({
    name:"Sahari",
    address:{
        street:"Badea Azaman",
        zipcode:3052
    },
    yelpUrl:"https://yelp/sahari.com",
    items:[menu2,menu3]})

const restaurant2 = new RestaurantModel({
    name:"Shawerma Plus",
    address:{
        street:"Alabraj",
        zipcode:3072
    },
    yelpUrl:"https://yelp/Shawerma.com",
    items:[menu1,menu2,menu3]})

const restaurant3 = new RestaurantModel({
    name:"Almadinah",
    address:{
        street:"Badea Azaman",
        zipcode:3056
    },
    yelpUrl:"https://yelp/Almadinah.com",
    items:[menu1,menu2,menu4]})

    const restaurants = [restaurant1,restaurant2,restaurant3]

    RestaurantModel.insertMany(restaurants)
    .then(()=>{
        console.log(`Added ${restaurants.length} restaurants to database.`)
    })
    .catch((error)=>{
        console.log(error)
    })
