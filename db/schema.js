const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum',{ 
    useNewUrlParser: true ,
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
})

const db = mongoose.connection

// db.on('error', console.error.bind(console, 'connection error:'))

db.on('error', function(err) {
    console.log(err)
})

db.once('open', function() {
  console.log('database successfully connected')
})


// creating Schema
let Schema = mongoose.Schema

let MenueSchema = new Schema ({
    title: String
})

let RestaurantSchema = new Schema ({
    name: String,
    address: {
        street: String,
        zipcode: Number
    },
    yelpUrl: String,
    items: [MenueSchema]

})

// creating Models


let RestaurantModel = mongoose.model("Restaurant", RestaurantSchema)
let MenueModel = mongoose.model("Menue", MenueSchema)


module.exports = {
    RestaurantModel: RestaurantModel,
    MenueModel: MenueModel
}
