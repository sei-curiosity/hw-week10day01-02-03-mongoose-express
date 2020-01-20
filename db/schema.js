const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yum', { useNewUrlParser: true , useUnifiedTopology: true, 
useFindAndModify: false, useCreateIndex: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('database successfully connected')
  })

  let Schema = mongoose.Schema // this is a schema method
  let menueItem = new Schema ({
    title: String,
  })

let resturantSchema = new Schema ({
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

restrentModel.create({ name: 'the cheeseCake factory ', 
yelpUrl: 'https://www.yelp.com/biz/the-cheesecake-factory-san-francisco-2?osq=The+Cheesecake+Factory',
item:[menueItem[0]],
address:{street:"The North Ring",
zipcode: 1212 }})

restrentModel.create({ name: 'Mona Lisa ', 
yelpUrl: 'https://www.yelp.com/biz/mona-lisa-restaurant-san-francisco',
item:[menueItem[0]],
address:{street:"Columbus Ave",
zipcode: 1232} })

restrentModel.create({ name: 'Fog Harbor Fish House ', 
yelpUrl: 'https://www.yelp.com/biz/fog-harbor-fish-house-san-francisco-2',
item:[menueItem[0]],
address:{street:"Pier",
zipcode: 1312} })

menuModel.create({ title:'apple' },{title:'orange' })

  .then((restrunt) => {
    console.log(restrunt);
  })
  .then((menue) => {
    console.log(menue);
  })
  .catch((error) => {
    console.log(error)
  })

  restrentModel.findOne({name: the }, callback)

// db.restrunts.find({name: /the/ }).pretty()
// db.restrunts.find({ address: { zipcode: /1212/ } }).pretty()
//

router.get('/restrunts', (request, response) => {
    restrentModel.find({})
      .then((restrunts) => {
        response.send({ 
            restrunts: restrunts
        })
      })
      .catch((error) => {
        console.log(error)
      })
  })
  