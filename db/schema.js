const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum',
{ useNewUrlParser: true , useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
    console.log("restaurant is open")
})

let Schema = mongoose.Schema
// db.close();

let MenueitemsSchema =new Schema ({
    title: String
})


let RestaurantSchema = new Schema ({
    name: String,
    address:  {street: String , zipcode: Number },
    yelpUrl: String,
    items: [MenueitemsSchema]
    })


    let RestaurantModel = mongoose.model("Restaurant", RestaurantSchema)
    let MenueitemsModel = mongoose.model("MenueItem", MenueitemsSchema)

    module.exports = {
        RestaurantModel: RestaurantModel,
        MenueitemsModel: MenueitemsModel
    }