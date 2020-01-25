let mongoose = require('mongoose')
let Schema = require("../db/schema")
let db = mongoose.connection
let  RestaurantModel = Schema.RestaurantModel
let  MenueModel = Schema.MenueModel
const express = require('express')
const router = express.Router()
const hbs = require('hbs')

// const disconnect = ()=> db.close()


//index route
router.get('/restaurants', (req, res) => {
    RestaurantModel.find({})
    .then( (restaurants) => {
        // res.send(restaurants)
        res.status(200).json({restaurants: restaurants})
        //server side rendering
        // res.render('restaurants', {
        //     data: restaurants
        // })
        console.log(restaurants)
    })
    .catch( (error) => console.error)
}) // end



// show 
router.get('/restaurants/:id', (req, res) => {
    const rest_id = req.params.id
    console.log(rest_id)
    RestaurantModel.findOne({_id: rest_id})
    .then( (restaurant) => {
       res.render('restaurant', {
           data: restaurant
       })
        console.log(`You are looking for ${restaurant} restaurant`)
    })
    .catch((error) => console.log(error))
})


// delete
router.delete('/restaurants/:id', (req, res) => {
    const rest_id = req.params.id
    RestaurantModel.findByIdAndRemove(rest_id)
    .then( () => console.log(`Deleted the restaurant with id: ${rest_id}`)
    )
    .catch( (error) => console.error)
})


// update 

router.patch('/restaurants/:id', (req, res) => {
    const rest_id = req.params.id
    const restaurantUpdates = req.body.restaurant
    console.log(req.body)
    RestaurantModel.findByIdAndUpdate(rest_id, restaurantUpdates)
        .then((restaurant) => {
            console.log(restaurant)
        })
        .catch( (error) => console.error)
})


const create = (name, address, yelpUrl, items) => {
    const restaurantParams = {
        name: name,
        address: address,
        yelpUrl: yelpUrl,
        items:  items 
        }
    RestaurantModel.create(restaurantParams)
    .then((restaurant) => {
        console.log(restaurant)
    })
    .catch((error) => console.log(error))
    .then(disconnect)
     

}   // end create func  

// create("Burger King", {street: "ALkhaleej", zipcode: 555555}, "IDK", breakfasts)


const find = (restaurantName) => {
    RestaurantModel.findOne({name: restaurantName}) // a condition where the key name is equal to the parameter restaurantName
    .then( (restaurant) => {
        console.log(`You are looking for ${restaurant} restaurant`)
    })
    .catch((error) => console.log(error))
    .then(disconnect)
} // end func

// find("Urth")


const findAllWithZip = (code) => {
    RestaurantModel.find({"address.zipcode": code } )
    .then( (restaurants) => {
        console.log(restaurants)
    })
    .catch( (error) => console.error)
    .then(disconnect)
} // end func

// findAllWithZip(66666)

const update = (rest_id, update_name) => {
        RestaurantModel.findByIdAndUpdate(rest_id, {$set: {name: update_name}})
        .then((restaurant) => {
            console.log(restaurant)
        })
        .catch( (error) => console.error)
        .then(disconnect)
} // end func

// update("5e25fa3119ad4819e28ccc4a", "Updated McDonalds")


const findAll = () => {
    RestaurantModel.find({})
    .then( (restaurants) => {
        console.log(restaurants)
    })
    .catch( (error) => console.error)
    .then(disconnect)
} // end func

// findAll()


const destroy = (rest_id) => {
    RestaurantModel.findByIdAndRemove(rest_id)
  .then(findAll => console.log(`Deleted the item with id: ${rest_id}`))
  .catch( (error) => console.error)
  .then(disconnect)

} // end func

// destroy("5e2601f88c0c7e1d9cad95d0")




const addMenuItem = (rest_id, newItem) => {

    let mItem
    let foundRest 

    RestaurantModel.findById(rest_id)
    .then( (restaurant) => {
        foundRest = restaurant
        console.log(foundRest) 
    })
    .catch( (error) => console.error)



    MenueModel.create({title: newItem})
    .then(item => {
        mItem = item
        console.log(mItem)    
    })
    .catch( (error) => console.error)
    .then(disconnect)


    // foundRest.items.push(mItem)

    console.log(foundRest)

} // end func

// addMenuItem("5e25fb73bb27291b0d1e044c", "White Mocha 33") // send a document as a new menu item to be added to subdocument




module.exports = router