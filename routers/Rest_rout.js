
const express = require('express');
const Restaurant = require('../db/model/schema').Restaurant
const Menue = require('../db/model/schema').Menue
const router = express.Router()

//__________________ index
router.get('/restaurants',(req,res)=>{
    Restaurant.find()
    .then(rest => {res.status(200).json({restaurants:rest})})
    .catch(console.error)
})

//____________ show

router.get('/restaurants/:id',(req,res)=>{
    const restId= req.params.id 
    Restaurant.findById(restId)
    .then(rest=>{
     res.status(200).json({restaurant:rest})
    })
    .catch(console.error)
 })

 //_________________________create
 router.post('/restaurants',(req,res)=>{
    const newRest = req.body.restaurant
    Restaurant.create(newRest)
    .then(rest =>{
      res.status(201).json({restaurant:rest})
    })
    .catch(console.error)
})


//_____________________________________ update 
router.patch('/restaurants/:id',(req,res)=>{
    const restBody =req.body.restaurant;
    const restId= req.params.id;
    Restaurant.findById(restId)
    .then(rest=>{
         return rest.update(restBody)
    })
    .then( () => res.sendStatus(204) )
    .catch(console.error)

})

//_____________________________________delete


router.delete('/restaurants/:id', (req,res)=>{
    const restId = req.params.id
    Restaurant.findById(restId)
    .then(rest => {
        return rest.remove()
    })
    .then(()=> res.sendStatus(204))
    .catch(console.error)
})

module.exports = router;