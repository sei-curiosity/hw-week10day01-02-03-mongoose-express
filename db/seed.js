// let Schema = require("../db/schema.js");
let Schema =require("./schema")

let Restaurant =Schema.RestaurantModel
let MenuItem = Schema.MenuItemsModle

// Restaurant.remove()
// .then(()=>{
//     console.log(" All Restaurant deleted ")
// })
// .catch(error=>{

//     console.log(error)
// })


// MenuItem.remove()
// .then(()=>{
//     console.log(" All MenuItem deleted ")
// })
// .catch(error=>{
//     console.log(error)
// })

let item1 = new MenuItem({title:"coffee"})
let item2 =new MenuItem({title:"donuts"})
let item3 =new MenuItem({title:"pizza"})

let items=[item1,item2,item3]

let DD = new Restaurant({name:"DD",address:{street:"street103",zipcode:44},yelpUrl:"itsUrl/dd",items:items})
let cafeteria = new Restaurant({name:"cafeteria",address:{street:"street209",zipcode:44},yelpUrl:"itsUrl/cafeteria",items:items})

let restaurants=[DD,cafeteria]

// Restaurant.insertMany(restaurants)
// .then(()=>{
//     console.log(`Add resturant ${restaurants}`)
// })
// .catch(error=>{
//     console.log(error)
// })


// Write a function or method that finds a restaurant by name.
Restaurant.findOne({name:"DD"})
.then((resturant)=>{
    console.log(` resturant name  ${resturant}`)
}).catch(error=>{
    console.log(error)
})


// Write a function or method that finds all restaurants by zipCode
Restaurant.find({"address.zipcode":44})
.then(resturant=>{
    console.log(` restruant find by zipcode  ${resturant}`)
    
})
.catch(console.error)

// Create a function that updates a restaurant.
const update = (id ,field,value)=>{
    Restaurant.findById(id)
    .then(resturant=>{
        resturant[field]=value
        return resturant.save() 
        
    })
    .then(resturant=>{
        console.log(` new update  ${resturant}`)
    })
    .catch(console.error)
    
}
update("5e25c05f3dda2984d0785dbb","yelpUrl","hiItl")


// Write a function or method that deletes a restaurant.
const destroy = (id)=>{
    Restaurant.findById(id)
    .then(resturant=>{
       return resturant.remove() 
    })
    .catch(console.error)
    
}
destroy("5e25c05f3dda2984d0785dbb")


