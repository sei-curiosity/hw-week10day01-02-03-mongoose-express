const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


let Schema = mongoose.Schema

let MenuItems = new Schema ({
    title: String
})

let Restaurant = new Schema ({
    name: String,
    adress: {street:String,zipcode:Number},
    yelpUrl:String,
    items:[MenuItems]
})


let RestaurantModel = mongoose.model("Restuarant",Restaurant)
let MenuModel = mongoose.model("Menu",MenuItems)

module.exports = {
    RestaurantModel: RestaurantModel,
    MenuModel: MenuModel
}
// let pizza = new MenuModel({title:"Pizza"});
// let Yumm = RestaurantModel.create({name: "Yumm", 
//                         adress: {street:"Waha street",zipcode:11655},
//                         yelpUrl:"https://www.yelp.com/biz/monza-pizzeria-san-francisco?osq=delivery"})
//                         Yumm.items.push(pizza)
// .then((Restuarant) => {
//     console.log(Restuarant);
//   })
//   .catch((error) => {
//     console.log(error)
//   })