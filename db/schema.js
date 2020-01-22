const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum', {
    useNewUrlParser: true , useUnifiedTopology: true, 
    useFindAndModify: false, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// case error
db.once('open',()=> console.log("connected")) // case succsses
let Schema = mongoose.Schema
let menuSchema = new Schema ({
    title: String,
})

let restaurantSchema = new Schema ({
    name: String,
    address: {street: String,zipcode: Number},
    yelpUrl: String,
    items: [menuSchema]
    
})


let resturantModel = mongoose.model("resturant", restaurantSchema)

let menuModel = mongoose.model("menu", menuSchema)

module.exports = {
    resturantModel: resturantModel,
    menuModel: menuModel
}
// resturantModel.create({name: "dominos", address: "almathar"})
// .then((resturant)=>{
//     console.log(resturant)
// })
// .catch((error)=>{
//     console.log(error)
// })

// resturantModel.create({name: "mac", address: "almurabba"})
// .then((resturant)=>{
//     console.log(resturant)
// })
// .catch((error)=>{
//     console.log(error)
// })