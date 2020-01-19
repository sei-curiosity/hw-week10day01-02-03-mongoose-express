const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


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

let MenuModel = mongoose.model("Menu", MenuSchema)
let ResurantModel = mongoose.model("Resturant", ResturentSchema)

module.exports = { MenuModel, ResurantModel }
