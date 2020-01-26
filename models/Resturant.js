const mongoose = require('mongoose')


  let menueItem = new mongoose.Schema ({
    title: String,
  })


let resturantSchema = new mongoose.Schema ({
    name: String,
    yelpUrl: String,
    items:[menueItem],
    address:{
        street:String,
        zipcode:Number
    }
})

let restrentModel = mongoose.model("restrunt",resturantSchema )
let menuModel = mongoose.model("Menue", menueItem)

module.exports = {restrentModel,menuModel}
  