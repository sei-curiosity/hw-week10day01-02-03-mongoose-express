let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students' , { useNewUrlParser: true , useUnifiedTopology: true, 
useFindAndModify: false, useCreateIndex: true })

let db = mongoose.connection


db.on('error', function(err) {
    console.log(err)
})

db.once('open', function() {
  console.log('database successfully connected')
})


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


let RestaurantModel = mongoose.model("Restaurant", RestaurantSchema)
let MenueModel = mongoose.model("Menue", MenueSchema)

let Breakfast1 = new MenueModel({ title: "Egg & Cheese" })
let Breakfast2 = new MenueModel({ title: "Haloumi & Turkey" })
let Breakfast3 = new MenueModel({ title: "Pancakes & Cream" })

let breakfasts = [Breakfast1, Breakfast2, Breakfast3]

let McDonaldsRest = new RestaurantModel({ name: "McDonalds", address: {street: "Albazouri", zipcode: 11564}, yelpUrl: "IDK", items: breakfasts })


console.log(McDonaldsRest)

