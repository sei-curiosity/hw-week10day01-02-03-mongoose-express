// const {RestuarantModel, MenuModel, db} = require("./schema")
// let pizza = new MenuModel({title:"Pizza"});
// let Yumm = new RestuarantModel ({name: "Yumm", 
//                         adress: {street:"Waha street",zipcode:11655},
//                         yelpUrl:"https://www.yelp.com/biz/monza-pizzeria-san-francisco?osq=delivery"})
// Yumm.items.push(pizza)
// Yumm.save()
// .then((restuarant) => {
//     console.log(restuarant)
//     db.close()
//   })
//   .catch((error) => {

//     console.log(error)
//   })

  //---------------------------------------

let db = require('./db.js')
const {Restuarant, Menu} = require("./schema.js")
//First we clear the database 
Restuarant.remove({})
  .then(() => console.log('All Restuarants deleted!'))
  .catch(error => console.log(error))
  Menu.remove({})
  .then(() => console.log('All items deleted!'))
  .catch(error => console.log(error))

const pizza = new Menu({title: "Pizza"})
const burger = new Menu({title: "Burgers"})
const taco = new Menu({title: "Tacos"})
const sushi = new Menu({title: "Sushi"})

const bburger = new Restuarant({name: "b-burger" , address: {street:"qarsha",zipcode:11655} , yelpUrl:"https://www.yelp.com/biz/in-n-out-burger-san-francisco" ,items:burger})
const pizaPizza = new Restuarant({name: "pizaPizza" , address: {street:"qarsha",zipcode:11655} , yelpUrl:"https://www.yelp.com/biz/in-n-out-burger-san-francisco",items:pizza})
const tacobell = new Restuarant({name: "tacobell" , address: {street:"qarsha",zipcode:11655} , yelpUrl:"https://www.yelp.com/biz/in-n-out-burger-san-francisco", items:[taco,burger]})
const oshisushi = new Restuarant({name: "oshiisushi" , address: {street:"qarsha",zipcode:11655} , yelpUrl:"https://www.yelp.com/biz/in-n-out-burger-san-francisco",items:sushi})
const restuarants = [bburger, pizaPizza, tacobell, oshisushi];
// Inserting into my DB
Restuarant.insertMany(restuarants)
  .then(() => console.info(`Added ${restuarants.length} users to database.`, "//" ,new Date()))
  .catch((error) => console.log(error))
  .then(()=>db.close())