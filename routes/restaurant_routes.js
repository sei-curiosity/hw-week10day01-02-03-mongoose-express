const express = require('express')

const Restaurant = require('../model/schema')

const router = express.Router()

//index
router.get('/restuarant', (req,res) => {
    Restaurant.find({})
    .then(restaurants => {
        res.status(200).json({restaurants: restaurants})
    })
    .catch(console.error)
})
// create 
router.post('/restuarant',(req,res) => {
    const newRestuarant = req.body.restuarant
    Restuarant.create(newRestuarant)
    .then(restuarant => {
        res.status(201).json({restuarant:restuarant})
    })
    .catch(console.error)
})
//show 
router.get('/restuarants/:id', (req,res) => {
    const restuarantId = req.params.id

    Restuarant.findById(restuarantId)
    .then(restuarant => {
        res.status(200).json({restuarant:restuarant})
    })
    .catch(console.error)
})
    
//update
router.patch('/restuarants/:id',(req,res)=>{
    const restuarantBody = req.body.restuarant
    const restuarantId = req.params.id

    Restuarant.findById(restuarantId)
    .then(restuarant =>{
        restuarant.update(restuarantBody)
        return restuarant.update(restuarantBody)
    })
    .catch(console.error)
    .then( () => res.sendStatus(204))
})
//Delete 
router.delete('/restuarants/:id',(request,response) => {
    const restuarantId = request.params.id
    Restuarant.findById(restuarantId)
    .then(restuarant => {
        return restuarant.remove()
    })
    .then(() => res.sendStatus(204) )
    .catch(console.error)
})

module.exports = router

