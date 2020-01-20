let mongoose = require('mongoose');
let Schema = require("./schema.js");
let db = mongoose.connection

let restrentModel = Schema.restrentModel;
let menuModel = Schema.menuModel;

// First we clear the database of existing students and projects.
restrentModel.remove({})
  .then(() => {
    console.log('All rest deleted!')
  })
  .catch((error) => {
    console.log(error)
  })
  menuModel.remove({})
  .then(() => {
    console.log('All items deleted!')
  })
  .catch((error) => {
    console.log(error)
  })



  const dinner = new menuModel({ title:'apple' })
const launch = new menuModel({title:'orange' })
const drinks = new menuModel({title:'tea' })
const drink = new menuModel({title:'coffee' })

const menueItems = [dinner, launch, drinks, drink];


menuModel.insertMany(menueItems)
  .then(() => {
    console.log(`Added ${menueItems.length} items to database.`)
   // console.log(menueItems)
  })
  .catch((error) => {
    console.log(error)
  })

  const rest1 = new restrentModel({ name: 'the cheeseCake factory ', 
yelpUrl: 'https://www.yelp.com/biz/the-cheesecake-factory-san-francisco-2?osq=The+Cheesecake+Factory',
item:[menueItems[0]],
address:{street:"The North Ring",
zipcode: 1212 }})

const rest2 = new restrentModel({name: 'Mona Lisa ', 
yelpUrl: 'https://www.yelp.com/biz/mona-lisa-restaurant-san-francisco',
item:[menueItems],
address:{street:"Columbus Ave",
zipcode: 1232}})

const rest3 = new restrentModel({name: 'Fog Harbor Fish House ', 
yelpUrl: 'https://www.yelp.com/biz/fog-harbor-fish-house-san-francisco-2',
item:[menueItems],
address:{street:"Pier",
zipcode: 1312} })

const rests = [rest1, rest2, rest3 ]

restrentModel.insertMany(rests)
  .then(() => {
    console.log(`Added ${rests.length} restrunts to database.`)
    //console.log(rests)
  })
  .catch((error) => {
    console.log(error)
  })
  .then(()=> db.close())

  //db.rests.find({name: /the/ }).pretty()
//db.restrunts.find({ address: { zipcode: /1212/ } }).pretty()

