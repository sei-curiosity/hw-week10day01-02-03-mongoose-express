const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/library")

const db = mongoose.connection

db.on('error', ()=> console.error)
db.once('open', ()=> console.log("conneted"))

