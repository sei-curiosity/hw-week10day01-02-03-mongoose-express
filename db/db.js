const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/restuarant-crud`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', ()=> console.error)
db.once('open', ()=> console.log("Database sucessfully connected (: "))


module.exports = db