//import express
const express = require("express")
//import needed models
const Schema = require('../models/schema')
const Restaurant = Schema.RestaurantModel
const Menu = Schema.MenuModel
// router
const router = express.Router()
// cors//midleware //npm install cors //.use(localhost:9000)//then connected with react
//root router
router.get("/",(req,res)=>{
   res.send("Root Path")
})
//index 
//GET /restaurants
router.get("/restaurants",(req,res)=>{
    Restaurant.find()
    .then(restaurants =>{
        res.status(200).json({restaurants: restaurants})
    })
    .catch(console.error)
})

//create
//POST /restaurants
router.post("/restaurants",(req,res)=>{
    const newRestaurants= req.body;
    Restaurant.create(newRestaurants)
    .then(restaurant =>{
        res.status(201).json({restaurant:restaurant})
    })
    .catch(console.error)
})

//show
//GET /restaurants/:id
router.get("/restaurants/:id",(req,res)=>{
    const restaurantId=req.params.id
    Restaurant.findById(restaurantId)
    .then(restaurant =>{
        res.status(200).json({restaurant:restaurant})
    })
    .catch(console.error)
})

//update
//PATCH /restaurants/:id
router.patch("/restaurants/:id",(req,res)=>{
    const restaurantBody = req.body
    const restaurantId = req.params.id
    Restaurant.findById(restaurantId)
    .then(restaurant => {
       return restaurant.update(restaurantBody)
    })
    .then(()=> res.sendStatus(204))
    .catch(console.error)
})

//distroy
//DELETE /restaurants/:id
router.delete("/restaurants/:id",(req,res)=>{
    const restaurantId = req.params.id
    Restaurant.findById(restaurantId)
    .then(restaurant =>{
        return restaurant.remove()
    })
    .then(()=>res.sendStatus(204))
    .catch(console.error)
})


router.get('/restaurants/:restaurantid/menus', (req, res) => {
    const restaurantid = req.params.restaurantid
    Restaurant.findById(restaurantid)
    .then((restaurant) => {
        res.send({
            menus: restaurant.items
        })
    })
})

// show a specific menu by a specific restaurant
router.get("/restaurants/:restaurantId/menus/:menuId",(req,res)=>{
    const restaurantId=req.params.restaurantId
    const menuId= req.params.menuId
    Restaurant.findById(restaurantId)
    .then((restaurant)=>{
        const currentMenu = restaurant.items.find(menu=>menu._id==menuId)
        res.send({
            menu:currentMenu
        })
    })
})

//! Create a new menu for a specific restaurant
router.post('/restaurants/:restaurantid', (req, res)=> {
    const restaurantid = req.params.restaurantid
    const newMenu = req.body
    const createMenu = new Menu ({"title": newMenu.title})
    Restaurant.findById(restaurantid)
    .then((restaurant)=> {//here we push the menu in restaurant menus
        restaurant.items.push(createMenu)
        return restaurant // after updating the restaurant we want to return it to save it in the athor then statment
    })
    .then (restaurant => restaurant.save()) // here we save the menu to the restaurant
    .then((savedrestaurantWithNewMenu)=> {
        res.redirect(`/restaurants/${restaurantid}`)
    })
    .catch(err => console.log(err))
    })

//! update a specific menu by a specific restaurant
router.put('/restaurants/:restaurantid/menus/:menuid', (req, res)=> {
    const restaurantid = req.params.restaurantid
    const menuid = req.params.menuid
    const updatedMenu = req.body
    Restaurant.findById(restaurantid)
    .then((restaurant)=> {
        let index = restaurant.items.findIndex(x => x._id == menuid)
        restaurant.items[index].title = updatedMenu.title
        return restaurant
    })
    .then((restaurant) => restaurant.save())
    .then((restaurant) => res.redirect(`/restaurants/${restaurantid}/menus/${menuid}`))
    .catch(err => console.log(err))
})

//!delete a specific menu by a specific restaurant
router.delete('/restaurants/:restaurantid/menus/:menuid', (req, res) => {
    const restaurantid = req.params.restaurantid
    const menuid = req.params.menuid
    Restaurant.findById(restaurantid)
    .then ((restaurant) => {
        let index = restaurant.items.findIndex(x => x._id == menuid)
        if(index > -1) {
            restaurant.items.splice(index, 1)
        }
        return restaurant
    })
    .then(restaurant => restaurant.save())
    .then(()=> res.redirect(`/restaurants/${restaurantid}/menus`))
    .catch(err => console.log(err))
})

module.exports=router