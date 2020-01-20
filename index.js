var mongoose = require('mongoose');
// var Schema = require("./db/schema.js");
// db.close()


// const mongoose = require('mongoose');
const url = 'mongodb://localhost/yum'
// mongoose.connect('mongodb://localhost/yum');
mongoose.connect(url,{useUnifiedTopology: true,useNewUrlParser: true })

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

// module.exports = { MenuModel, ResurantModel }


// let Schema = require("./schema");

let item1 = new MenuModel({
    title: "Donats"
})

let items = [item1]
let dankin = new ResurantModel({ 
    name: "Dankin",
    adress: {street: "King Salman", zipcode: 1423},
    yelpUrl: "http://yelp.com",
    items: []
})


dankin.save()
  .then((resturant) => {
    // console.log(resturant);
    resturant.items.push(item1)

  })
  .catch((error) => {
    // console.log(error)
  })

// console.log(ResurantModel.length)

const done = function(){
    console.log('Close the connection to DB')
    db.close()
}

const findByName = (name) => {
    ResurantModel.findOne({name: name})
    .then(resturant => {
        console.log(resturant)
    })
    .catch(console.error)
    // .then(done)
}

const findByZip = (zip) => {
    ResurantModel.find(
        {adress: {street: "King Salman"}}
        )
    .then(resturant => {
        console.log(resturant)
    })
    .catch(console.error)
    // .then(done)
}
const update = (id, field, value) => {
    ResurantModel.findById(id)
    .then(resturant => {
        resturant[field] = value
        return resturant.save()
    })
    .catch(console.error)
    .then(done)
}

const destroy = (id) => {
    ResurantModel.findById(id)
    .then(resturant => {
        return resturant.remove()
    })
    .catch(console.error)
    .then(done)
    // another way to do remove 
    // Student.findByIdAndRemove(id)
    // .catch(console.error)
    // .then(done)
}
//  destroy('5e25eae193cd8b72ed8eccfb')


//    update('5e25eae193cd8b72ed8eccfb' , 'name' , 'basha')

findByName('basha')
findByZip(1423)


