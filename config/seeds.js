let db = require("./db");
let {RestaurantModel ,MenuItemsModle} =require("../model/Restaurant")


RestaurantModel.remove({})
  .then(() => console.log('All Restaurant deleted!'))
  .catch(error => console.log(error))
  MenuItemsModle.remove({})
  .then(() => console.log('All MenuItems deleted!'))
  .catch(error => console.log(error))



// let Restaurant =db.RestaurantModel
// let MenuItem = db.MenuItemsModle



let item1 = new MenuItemsModle({title:"Coffee"})
let item2 =new MenuItemsModle({title:"Pizza"})
let item3 =new MenuItemsModle({title:"Donuts"})

let items=[item1,item2,item3]

let restaurant1 = new RestaurantModel({name:"Little Nepal",address:{street:"2 Avenue",zipcode:10075},yelpUrl:"https://www.yelp.com/biz/little-nepal-san-francisco",items:items})
let restaurant2 = new RestaurantModel({name:"Zazie",address:{street:"7 Avenue",zipcode:10777},yelpUrl:"https://www.yelp.com/biz/zazie-san-francisco?osq=Restaurants",items:items})

let restaurants=[restaurant1,restaurant2]

RestaurantModel.insertMany(restaurants)
.then(() => console.info(`Added ${restaurants.length} restaurants to database.`, "//" ,new Date()))

.catch(error=>{
    console.log(error)
}) 
.then(()=>db.close())