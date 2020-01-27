let Schema = require("../db/schema.js");
let Schema = require("../db/schema.js");

let RestaurantModel = Schema.RestaurantModel
let MenuModel = Schema.MenuModel
const menu1=new MenuModel({title:"superfood"})
const menu2=new MenuModel({title:"Sandwiches "})
const menu3=new MenuModel({title:"briskett"})
const menu4 =new MenuModel({title:"goulash soup"})

const restaurant2=new RestaurantModel({
    name:"o",address:{street:"ooo",zipcode:999},yelpUrl:"https://yelp/oooo",items:[menu1,menu2,menu3]})
const restaurant2=new RestaurantModel({
    name:"k",address:{street:"kkkk",zipcode:999},yelpUrl:"https://yelp/kkkkk",items:[menu1,menu2,menu3]})
const restaurant2=new RestaurantModel({
    name:"i",address:{street:"iiii",zipcode:999},yelpUrl:"https://yelp/iiiiiiiiii",items:[menu1,menu2,menu3]})
    const restaurants=[restaurant1,restaurant2,restaurant3]
    RestaurantModel.insertMany(restaurants)
    .then(()=>{
        console.log(`Add ${restaurants.length} restuant`)
    })
    .catch((error)=>{
        console.log(error)
    })