const mongoose = require('mongoose')
mongoose.connect('mongoos//localhost/3000',{ useNewUrlParser: true,
useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error',()=>console.error.bind())
db.on('open',()=>{console.log('conneected')})

module.exports=db