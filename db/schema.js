const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("database successfully connected")
})
const done = function(){
  console.log('Close the connection to DB')
  db.close()
}
//1
let Schema = mongoose.Schema
let MenuItems = new Schema ({
    title: String
})

let RestaurantSchema = new Schema ({
    name: String,
    address: {street:String,zipcode:Number},
    yelpUrl: String,
    items: [MenuItems] 
})
let MenuModel = mongoose.model("Menu", MenuItems)
let RestaurantModel =mongoose.model("Restaurant", RestaurantSchema)
//2
const menu1 = new MenuModel({title:"California Roll"})
const menu2 = new MenuModel({title:"Shrimp Tempura Roll"})
let SushiArt = new RestaurantModel({ name: "SushiArt",items:[menu1,menu2]});
SushiArt.save()
  .then((sushi) => {
    console.log(sushi);
  })
  .catch((error) => {
    console.log(error)
  }) 
 //3

 const create = (name,address,yelpUrl,items) => {
  const restParams = {
    name : name,
    address : address,
    yelpUrl : yelpUrl,
    items : items
  }

  RestaurantModel.create(restParams)
  .then(rest => {
      console.log(rest)
  })
  .catch(error => console.log(error))
  .then(done)
}


 //4
  const show = (name) => {
    RestaurantModel.findOne({ name: name }, function (err, adventure) {})
    .then(rest => {
        console.log(rest)
    })
    .catch(console.error)
    .then(done)
    
}



  const index = function(){
    RestaurantModel.find()
    .then(rest => {
        console.log(rest)
    })
    .catch(console.error)
    .then(done)
}

 

show("SushiArt")

//6
const update = (id,field,value) => {
  RestaurantModel.findById(id)
  .then(rest => {
    rest[field] = value
      return rest.save()
  })
  .catch(console.error)
  .then(done)
}

//7

const destroy = (id) => {
  RestaurantModel.findById(id)
  .then(rest => {
      return rest.remove()
  })
  .catch(console.error)
  .then(done)

}
//8 not finished yet

// const addRemoveMenue = (id,menuItem) => {
//   RestaurantModel.findById(id)
//   .then(rest => {
      

//   })
//   .catch(console.error)
//   .then(done)
  
// }



update("5e25e8cbb91f459d755d17e1","name","yum yum")
show("yum")
index()
destroy("5e25e8cbb91f459d755d17e1")
create("sushiYushi",{street:"king abdullah",zipcode:12425},"yelpUrl",[{title:"California Roll"}])