const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/restaurant")

const db = mongoose.connection

db.on('error', ()=> console.error)
db.once('open', ()=> console.log("conneted"))


module.exports = db