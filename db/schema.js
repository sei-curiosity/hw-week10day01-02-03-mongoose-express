const mongoose = require('mongoose');
const url = `mongodb://localhost/restuarant-crud`
mongoose.connect(url,{
    useUnifiedTopology: true,
     useNewUrlParser: true 
    })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once

let Schema = mongoose.Schema

let MenuSchema = new Schema ({
    title: String
})
let Menu = mongoose.model("Menu",MenuSchema)

let RestaurantSchema = new Schema ({
    name: String,
    address: {street:String,zipcode:Number},
    yelpUrl:String,
    items:[{ type: Schema.Types.ObjectId, ref: 'Menu'}]
})


let Restaurant = mongoose.model("Restuarant",RestaurantSchema)


module.exports = {
    Restaurant,
    Menu,
    db
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