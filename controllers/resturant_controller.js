const express = require('express')
const router = express.Router()
const Schema = require("../db/schema.js")
const resturant = Schema.resturantModel
const menu = Schema.menuModel

router.get('/resturant',(req,res)=> {
    resturant.find({})
    .then((resturants)=> {
        res.send({
            resturants: resturants
        })
    })
    .catch(
    error=>console.error( error)
        
    )
})

module.exports = router