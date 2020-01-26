let mongoose = require('mongoose')
let Schema = require("../db/schema")
let db = mongoose.connection
let  RestaurantModel = Schema.RestaurantModel
let  MenueModel = Schema.MenueModel
const express = require('express')
const router = express.Router()
const hbs = require('hbs')

// const disconnect = ()=> db.close()


// index route
router.get('/restaurants', (req, res) => {
    RestaurantModel.find({})
    .then( (restaurants) => {
        res.send({
            restaurants: restaurants
        })
        // res.status(200).json({restaurants: restaurants})
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
        res.send({restaurant})
    //    res.render('restaurant', {
    //        data: restaurant
    //    })
        console.log(`You are looking for ${restaurant} restaurant`)
    })
    .catch((error) => console.log(error))
})


// delete
router.delete('/restaurants/:id', (req, res) => {
    const rest_id = req.params.id
    RestaurantModel.findByIdAndRemove(rest_id)
    .then( () => {
        res.redirect('/restaurants')
        console.log(`Deleted the restaurant with id: ${rest_id}`)}

    )
    .catch( (error) => console.error)
})


// update 

router.put('/restaurants/:id', (req, res) => {
    const rest_id = req.params.id
    const restaurantUpdates = req.body
    console.log(req.body)
    RestaurantModel.findByIdAndUpdate(rest_id, restaurantUpdates)
        .then((updatedRestaurant) => {
            res.redirect(`/restaurants/${updatedRestaurant._id}`)
            console.log(updatedRestaurant)
        })
        .catch( (error) => console.error)
})



//// CRUD ON MENU

// indexing all menu items for specific restaurant by restaurant name
router.get('/restaurant/?', (req, res) => {
    const restName = req.query.restName
    // console.log(rest_query)
    RestaurantModel.findOne({name: restName})
    .then( (restaurant) => {
        res.send({
            items: restaurant.items
        })
    })
    .catch((error) => console.log(error))
})

// show single menue item
router.get('/restaurants/:restid/items/:itemid', (req, res) => {
    const restid = req.params.restid
    const itemid = req.params.itemid
    console.log(restid)
    console.log(itemid)
    RestaurantModel.findById(restid)
    .then( (restaurant) => {
        const item = restaurant.items.find( item => item._id == itemid)
        res.send({item})
        console.log(item)
    })
    .catch((error) => console.log(error))
})
//localhost:3000/restaurant/?restName=McDonalds One/?itemName=Egg & Cheese



// add new item for single rest
router.post('/restaurant/:restid', (req, res) => {
    const restid = req.params.restid
    const nItem = req.body // {"title": "oats" }
    RestaurantModel.findById(restid)
    .then(restaurant => {
        const newItem = new MenueModel({title: nItem.title})
        restaurant.items.push(newItem)
        return restaurant
    })
    .then( rest => rest.save() )
    .then( savedRest => {
        res.send({
            restaurant: savedRest.items
        })
    })
    .catch(err => console.log(err))
})


// update an item for single rest
router.put('/restaurants/:restid/items/:itemsid', (req, res) => {
    const restid = req.params.restid
    const itemsid = req.params.itemsid
    const itemUpdates = req.body
    RestaurantModel.findById(restid)
    .then(rest => {
        let index = rest.items.findIndex( item => item._id == itemsid )
        rest.items[index].title = itemUpdates.title
        return rest
    })
    .then( rest => rest.save() )
    .then( savedUpdatedRest => {
        res.redirect(`/restaurants/${restid}/items/${itemsid}`)
    })
    .catch(err => console.log(err))
})


// delete an item for single rest
router.delete('/restaurants/:restid/items/:itemsid', (req, res) => {
    const restid = req.params.restid
    const itemsid = req.params.itemsid
    RestaurantModel.findById(restid)
    .then(rest => {
        let index = rest.items.findIndex( item => item._id == itemsid )
        rest.items.splice(index, 1)
        return rest
    })
    .then( rest => rest.save() )
    .then( savedUpdatedRest => {
        res.redirect(`/restaurants`)
    })
    .catch(err => console.log(err))
})




module.exports = router