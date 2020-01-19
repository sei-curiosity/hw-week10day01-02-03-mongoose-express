const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum',
{useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open',function(){
    console.log("database successfully cunnected")
})

// db.close()

let Schema =mongoose.Schema

let MenuItemsSchema =new Schema({
    title:String
})

let RestaurantSchema = new Schema({
    name: String,
    address:{street:String,zipcode:Number},
    yelpUrl:String,
    items :[MenuItemsSchema]
})

let RestaurantModel = mongoose.model("Restaurant",RestaurantSchema)
let MenuItemsModle = mongoose.model("MenuItem",MenuItemsSchema)

module.exports={
    RestaurantModel : RestaurantModel,
    MenuItemsModle : MenuItemsModle
}