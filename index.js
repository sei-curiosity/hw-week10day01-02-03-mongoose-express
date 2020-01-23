const mongoose = require('mongoose');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
const Schema=require('./db/schema.js')

const MenuItemModel =Schema.MenuItemModel
const RestaurantModel=Schema.RestaurantModel
const item1=new MenuItemModel({title:"burger"})
   const item2=new MenuItemModel({title:"burger"})  
       const items=[item1,item2]
   

const create = (name,address,yelpUrl,items)=>{
   const restrantPrams={ 
    name:name,
    address:address,
    yelpUrl:yelpUrl,
    items:items
}
    RestaurantModel.create(restrantPrams)
     .then(restrants=>{
       console.log(restrants)
     })
    .catch(error=> console.log(error))
    
   }
  

//create('herfy','street','ylep',items)
const index=function(){
    RestaurantModel.find({})
    .then(resturants=>{
        console.log(resturants)
    })
    .catch(console.error)
    
}
index()

