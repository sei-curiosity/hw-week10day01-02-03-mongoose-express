//import express
const express = require("express")
//import needed models
const Schema = require('../models/schema')
const Restaurant = Schema.RestaurantModel
// route
const route = express.Router()

//root route
route.get("/",(req,res)=>{
   res.render("layout")
})
//index 
//GET /restaurants
route.get("/restaurants",(req,res)=>{
    Restaurant.find()
    .then(restaurants =>{
        res.status(200).json({restaurants: restaurants})
    })
    .catch(console.error)
})

//create
//POST /restaurants
route.post("/restaurants",(req,res)=>{
    const newRestaurants= req.body.restaurant;
    Restaurant.create(newRestaurants)
    .then(restaurant =>{
        res.status(201).json({restaurant:restaurant})
    })
    .catch(console.error)
})

//show
//GET /restaurants/:id
route.get("/restaurants/:id",(req,res)=>{
    const restaurantId=req.params.id
    Restaurant.findById(restaurantId)
    .then(restaurant =>{
        res.status(200).json({restaurant:restaurant})
    })
    .catch(console.error)
})

//update
//PATCH /restaurants/:id
route.patch("/restaurants/:id",(req,res)=>{
    const restaurantBody = req.body.restaurant
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
route.delete("/restaurants/:id",(req,res)=>{
    const restaurantId = req.params.id
    Restaurant.findById(restaurantId)
    .then(restaurant =>{
        return restaurant.remove()
    })
    .then(()=>res.sendStatus(204))
    .catch(console.error)
})

module.exports=route