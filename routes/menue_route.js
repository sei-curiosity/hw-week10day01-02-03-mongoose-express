const express = require('express')

const Restaurant = require('../model/schema')

const router = express.Router()

//index
router.get('/restuarant/menue', (req,res) => {
    Menueitems.find({})
    .then(menueitems => {
        res.status(200).json({menueitems: menueitems})
    })
    .catch(console.error)
})
// create 
router.post('/restuarant/menue',(req,res) => {
    const newMenueitems = req.body.menueitems
    Menueitems.create(newMenueitems)
    .then(menueitems => {
        res.status(201).json({menueitems:menueitems})
    })
    .catch(console.error)
})
//show 
router.get('/restuarants/:id/menue', (req,res) => {
    const restuarantId = req.params.id

    Restuarant.findById(restuarantId)
    .then(menueitems => {
        res.status(200).json({menueitems:menueitems})
    })
    .catch(console.error)
})
    
//update
router.patch('/restuarants/:id/menue',(req,res)=>{
    const restuarantBody = req.body.restuarant
    const restuarantId = req.params.id

    Restuarant.findById(restuarantId)
    .then(menueitems =>{
        menueitems.update(restuarantBody)
        return menueitems.update(restuarantBody)
    })
    .catch(console.error)
    .then( () => res.sendStatus(204))
})
//Delete 
router.delete('/restuarants/:id/menue',(request,response) => {
    const restuarantId = request.params.id
    Restuarant.findById(restuarantId)
    .then(menueitems => {
        return menueitems.remove()
    })
    .then(() => res.sendStatus(204) )
    .catch(console.error)
})

module.exports = router