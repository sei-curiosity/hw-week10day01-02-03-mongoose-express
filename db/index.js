const mongoose = require('mongoose');

const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
const Schema=require('./schema.js')
const MenuItemModel =Schema.MenuItemModel
const RestaurantModel=Schema.RestaurantModel



const create = (name,address,yelpUrl,items)=>{
   const restrantPrams={ 
       name:name,
    address:address,
    yelpUrl:yelpUrl,
    items:items}
    RestaurantModel.create(restrantPrams)
     .then(restrant=>{
       console.log(restrant)
     })
    .catch(error=> console.log(error))
    
   }


create('kudo','street','ylep',"burgerrice")

const index=function(){
    RestaurantModel.find()
    .then(resturants=>{
        console.log(resturants)
    })
    .catch(console.error)
    
}
index()

