const express = require('express');
const router = express.Router();
let {Restuarant,Menu}= require('../db/schema')
//let Menu = require('../db/schema')


/* INDEX */

router.get('/restuarants', (req,res) => {
  Restuarant.find({})
.then(restuarant => {
  res.send({
    restuarant:restuarant
  })
        })
        .catch(error => console.error(error))
    })

    //get all menu items for a restuarant
router.get('/restuarants/:restuarantid/item' , (req,res) => {
      const id = req.params.restuarantid
      Restuarant.findById(id)
      .then((restuarant) => {
          res.send({
              item:restuarant.items
          })
      })
  })

/* SHOW */

router.get('/restuarants/:id', (req,res)  =>{
  let restId = req.params.id
  Restuarant.findById(restId)
  .then((restuarant) => {
    res.status(200).json({restuarant: restuarant});
  }).catch(console.error)
});

//get single menu item 
router.get('/restuarants/:restuarantid/item/:itemid',(req,res) => {
  const id = req.params.restuarantid
  const itemid = req.params.itemid
  Restuarant.findById(id)
  .then((restuarant) => {
      const item = restuarant.items.find(item => item._id == itemid)
      res.send({
          item: item
      })
  }).catch(err => console.log(err))
})


/* CREATE */
// router.post('/restuarants/:id', function(req, res){
//     let menuParams = {
//         "title": req.body.title,
//       };
// let newMenuItem = new Menu(menuParams);
//      newMenuItem.save().then((menu) => {
//         res.redirect('/restuarants/:id');
//             })
// })

router.post('/restuarants', (req,res) => {
//   const rest = {
//     restuarant.name:req.body.name,
//     restuarant.address: req.body.address,
//   restuarant.yelpUrl: req.body.yelpUrl
// }

 let newRest = new Restuarant(req.body.restuarant)
 //const Menuitem = new Menu(req.body.items) 
 //Menuitem.save()
 //.then( menuItem => {
  //newRest.items.push(menuItem)
    newRest.save()
        //Restuarant.create(rest)
        .then(restuarant => {
        res.status(201).json({restuarant:restuarant});
        })
        .catch(console.error) })
     
  //})

router.post('/restuarants/:restuarantid',(req, res)=> {
    const id = req.params.restuarantid
    const body = req.body
    const newItem = new Menu ({
      "title": body.title
    })
    //const createItem = new Menu({"title": req.body.title})
    Restuarant.findById(id)
    .then((restuarant)=> {
      console.log(restuarant.items)
      restuarant.items.push(newItem)
        return restuarant
    })
    .then (restuarant => restuarant.save())
    .then((newItem)=>res.redirect(`/restuarants/${id}`))
    .catch(err => console.log(err))
    })

/* DELETE */

router.delete('/restuarants/:id', (req, res) => {
  const id = req.params.id
  Restuarant.findByIdAndDelete(id)
  .then (()=> res.sendStatus(204))
    .catch(console.error)
})

router.delete('/restuarants/:restuarantid/items/:itemid',(req,res) => {
  const id = req.params.restuarantid
  const itemid = req.params.itemid
  Restuarant.findById(id)
  .then((restuarant) => {
      let index = restuarant.items.findIndex(inx => inx._id == itemid)
      if (index > -1) {
        restuarant.items.splice(index,1)
      }
      return restuarant
  })
  .then (restuarant => restuarant.save())
  .then(()=> res.redirect(`/restuarants/${id}`))
  .catch(err => console.log(err))
})

/* UPDATE  */

router.patch('/restuarants/:id', (req,res) => {
  const id = req.params.id
  const body = req.body.restuarant
  Restuarant.findById(id)
    .then(restuarant => {
       return restuarant.update(body)
    })
    .then( () => res.sendStatus(204) )
    .catch(console.error)
  // Restuarant.findByIdAndUpdate(id,body)
  // .then((restuarant) => res.status(204))
  // .catch(console.error)
})

router.patch('/restuarants/:restuarantid/items/:itemid' , (req,res) => { 
  const id = req.params.restuarantid
  const itemid = req.params.itemid
  const update = req.body
  Restuarant.findById(id)
  .then((restuarant) => {
      let index = restuarant.items.findIndex(inx => inx._id == itemid)
      restuarant.items[index].title = update.title
      return restuarant})
      .then (restuarant => restuarant.save())
      .then(()=> res.redirect(`/restuarants/${id}`))
      .catch(err => console.log(err))
      
})

module.exports = router;