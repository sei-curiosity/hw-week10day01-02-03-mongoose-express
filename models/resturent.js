var mongoose = require('mongoose')

let Schema = mongoose.Schema

let MenuSchema = new Schema ({
    title: String,
})


let ResturentSchema = new Schema ({
    name: String,
    address:  {
        street: String,
        zipcode: Number
    }, //- an object with a street (string) and zipcode property (number)
    yelpUrl: String,
    items: [MenuSchema] //- an array containing your MenuItems schema
})

const ResurantModel = mongoose.model("Resturant", ResturentSchema)

module.exports = ResurantModel