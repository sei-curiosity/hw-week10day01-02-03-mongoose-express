const mongoose = require('mongoose')
const Schema = require('../schema')
const resturanSchema =Schema.resturanSchema
const studentModle = new mongoose.model('resturant',resturanSchema)

module.exports=studentModle