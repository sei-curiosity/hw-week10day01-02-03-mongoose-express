var mongoose = require('mongoose')

let Schema = mongoose.Schema

let MenuSchema = new Schema ({
    title: String,
})


let MenuModel = mongoose.model("Menu", MenuSchema)
