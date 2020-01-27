const mongoose = require('mongose')
const db
const Schema = mogoose.Schema

let MenueItems = new Schema({title:String})
let resturanSchema = new Schema({name:String,
    address:{street:String , zipcode:Number},
    yelpUrl:String,
    items:[{item:mongoose.types.objectId,ref:'MenueItems'}]})


module.exports={db,MenueItems,resturanSchema}