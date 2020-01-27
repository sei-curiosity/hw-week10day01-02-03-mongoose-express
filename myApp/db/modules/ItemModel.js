const mongoose = require('mongoose')
const {MenueItems} = require('../schema')
const Schema = mongoose.Schema
const itemModel = mongoose.model('item',MenueItems)

module.exports =  itemModel