const mongoose = require('mongoose');

const Schema = mongoose.Schema

const MenuSchema = new Schema ({
    title: String
})
let Menu = mongoose.model("Menu",MenuSchema)


const RestuarantSchema = new Schema ({
    name: String,
    address: {street:String,zipcode:Number},
    yelpUrl:String,
    items:[{ type: Schema.Types.ObjectId, ref: 'Menu'}]
})


let Restuarant = mongoose.model("Restuarant",RestuarantSchema)


module.exports = Restuarant,Menu

