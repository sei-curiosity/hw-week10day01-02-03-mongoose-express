const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum',{ useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify: false, useCreateIndex: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

let Schema = mongoose.Schema;

let MenuItemSchema=new Schema({
    title :String
});

let RestaurantScheme=new Schema({
    name:String,
    address:{street:String,zipcode:Number},
    yelpUrl:String,
    items:[MenuItemSchema]
});

let MenuItemModel=mongoose.model('MenuItem', MenuItemSchema);
let RestaurantModel=mongoose.model('Restaurant', RestaurantScheme);
