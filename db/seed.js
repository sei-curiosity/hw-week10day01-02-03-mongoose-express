let mongoose = require('mongoose');
let Schema = require("./schema");
let db = mongoose.connection
let RestaurantModel = Schema.RestaurantModel;
let MenuModel = Schema.MenuModel;



const menue1 = new MenuModel({
    title:'the first menue'
})
const menue2 = new MenuModel({
    title:'the second menue'
})
const menues =[menue1,menue2]

 const restaurant1 = new RestaurantModel ({
    name: 'R1' ,
    address ={street: 'one', zipcode:11},
    yelpUrl: "url1",
    items:[menues]
})
const restaurant2 = new RestaurantModel ({
    name: 'R2' ,
    address ={street: 'two', zipcode:22},
    yelpUrl: "url2",
    items:[menues]
})

const restaurant3 = new RestaurantModel ({
    name: 'R3' ,
    address ={street: 'three', zipcode:33},
    yelpUrl: "url3",
    items:[menues]
})
const restaurants = [restaurant1 ,restaurant2, restaurant3]
RestaurantModel.insertMany(restaurants)
