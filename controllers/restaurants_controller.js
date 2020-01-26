const router = require('express').Router()
let {RestaurantModel ,MenuItemsModle} =require("../model/Restaurant")

router.get('/', (req, res) => {
    res.send({url: req.originalUrl})
})


router.get('/restaurants', (req, res) => {
    RestaurantModel.find({})
    .then((restaurants) => {
        res.send({
            restaurants: restaurants
        })
    })
})

router.get('/restaurants/:restaurantid/MenuItems', (req, res) => {
    const restaurantid = req.params.restaurantid
    RestaurantModel.findById(restaurantid)
    .then((user) => {
        res.send({
            MenuItems: restaurant.MenuItems
        })
    })
})

























module.exports = router
