const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum',{ useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify: false, useCreateIndex: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

let Schema = mongoose.Schema;

let MenuItemSchema=new Schema({
    title :String
});

let RestaurantScheme=new Schema({
    name:{type:String,require:true},
    address:{type:String,require:true},
    yelpUrl:{type:String,require:true},
    //items:[MenuItemSchema]
},{timestamps:true});

let MenuItemModel=mongoose.model('MenuItem', MenuItemSchema);
let RestaurantModel=mongoose.model('Restaurant', RestaurantScheme);

module.exports={

MenuItemModel:MenuItemModel,
RestaurantModel:RestaurantModel
}
