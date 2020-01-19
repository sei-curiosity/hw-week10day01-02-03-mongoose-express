const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
    console.log("Restaurant is open")
})

let Schema = mongoose.Schema


let Menueitems =new Schema ({
    title: String
})


let RestaurantSchema = new Schema ({
    name: String,
    address:  {street: String , zipcode: Number },
    yelpUrl: String,
    items: [Menueitems]
    })


    let RestaurantModel = mongoose.model("Restaurant", RestaurantSchema)
    let MenueitemsModel = mongoose.model("MenueItem", Menueitems)

    module.exports = {
        RestaurantModel: RestaurantModel,
        MenueitemsModel: MenueitemsModel
    }




