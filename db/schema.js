const mongoose = require('mongoose');

const Schema = mongoose.Schema

const MenuSchema = new Schema ({
    title: String
})
const RestuarantSchema = new Schema ({
    name: String,
    address: {street:String,zipcode:Number},
    yelpUrl:String,
    items:[MenuSchema]
})

let Menu = mongoose.model("Menu",MenuSchema)
let Restuarant = mongoose.model("Restuarant",RestuarantSchema)


module.exports = {Restuarant,Menu}

