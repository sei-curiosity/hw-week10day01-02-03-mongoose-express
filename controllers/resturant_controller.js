const express = require('express')
const router = express.Router()
const Schema = require("../db/schema.js")
const resturant = Schema.resturantModel
const menu = Schema.menuModel

router.get('/resturants',(req,res)=> {
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
// index()
router.get('/resturants/:id',(req,res) => {
resturant.findById(req.params.id) 
    .then(resturant => {
        res.send(resturant)
    })
    .catch (
        error => console.error(error)
    )
})
//show() show function find by id

router.patch('/resturants/:id',(req,res)=> {
    resturant.findByIdAndUpdate(req.params.id)
    .then(resturant=>{
        res.send(resturant)
    })
    .catch (
        error => console.error(error)
    )
})
router.delete('/resturants/:id',(req,res)=> {
    resturant.findByIdAndDelete(req.params.id)
    .then(resturant=>{
        res.send()
    })
    .catch(
        error=> console.error(error)
    )
})

router.post('/resturants', (req, res) => {
let resBody = {name:'firegrill', address:{street:'alsulaymaniah', zipcode:'335'},yelUrl:'www.firegrill.com'}
resturant.create(resBody)
.then(resturant=> {
    res.send(" new resturant is created")
})
.catch(
    error=> console.error(error)
)
  });

module.exports = router