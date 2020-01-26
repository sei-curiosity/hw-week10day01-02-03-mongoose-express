const router = require('express').Router()


const {restrentModel,menuModel} = require('../models/Resturant')



router.get ('/rests', (req,res)=>{
   
    restrentModel.find({})
    .then((rests)=>{
        res.send({
             rests
        })
    })
})

// create new 
router.post('/rests',(req,res)=>{
    const newRest = req.body
    let createRest = new restrentModel({
        "name": newRest.name,
        "yelpUrl": newRest.yelpUrl,
        "items":newRest.items,
        "address":{
            "street":newRest.street,
            "zipcode":newRest.zipcode
            }
        })
        createRest.save()
        .then((rest)=>{
        res.redirect(`/rests/${rest._id}`)
        })
        .catch(err =>console.log(err))

 })

// //index 
router.get('/rests/:restsid/items', (req,res)=>{
    const restsid = req.params.restsid 
    restrentModel.findById(restsid)
    .then((rest)=>{
        res.send({
            restrent: rest.items
        })
    })
    .catch(()=>console.error)
})



// //delete 
router.delete('/rests/:restid', (req,res)=>{
    const restid = req.params.restid
    restrentModel.findByIdAndDelete(restid)
    .then((rest)=>{
        res.redirect(`/rests`)
    })
    .catch(err =>console.log(err))
})

router.patch('/rests/:restid', (req,res)=> {
  //  console.log(req.params)
    const restid = req.params.restid
    const updateRest = req.body 
    restrentModel.findByIdAndUpdate(restid, updateRest)
    .then((rest)=> {
        res.redirect(`/users/${restid}`)
    })
    .catch(err=>console.log(err))
})


router.post('/rests/:restid', (req,res)=>{
    const restid = req.params.restid
    const newItem = req.body 
    createItem = new menuModel({"title": newItem.title})

    restrentModel.findById(restid)
    .then((rest)=>{
        rest.items.push(createItem)
        return rest 
    })
    .then(rest=> rest.save())
    .then( res.redirect(`/rests/${restid}`))
    .catch(err => console.log(err))   

})


 //delete 

router.delete('/rests/:restid/items/:itemid',(req,res)=>{
    const restid = req.params.restid
    const itemid = req.params.itemid

    restrentModel.findById(restid)
    .then((rest)=>{
        let index = rest.items.findIndex(x => x._id == itemid)
        if (index > -1){
            rest.items.splice(index, 1)
        }
        return rest 
    })
    .then(rest => rest.save())
    .then(()=>res.redirect(`/rests/${restid}/items`))
    .catch(err=>console.log(err))
})






module.exports = router 
