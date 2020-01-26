const express = require('express');
const router = express.Router();
let Restuarant = require('../db/schema')
let Menu = require('../db/schema')




/* INDEX */

router.get('/restuarants', (req,res) => {
Restuarant.find()
.then(restuarant => {
  res.status(200).json({restuarant:restuarant})
        })
        .catch(error => console.error(error))
    })


/* SHOW */

router.get('/restuarants/:id', (req,res)  =>{
  let restId = req.params.id
  Restuarant.findById(restId)
  .then((restuarant) => {
    res.status(200).json({restuarant: restuarant});
  }).catch(console.error)
});

/* NEW*/


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



  router.post('/restuarants/:id/menu', (req,res) => {
    const menu = req.body.restuarant.items
  //   let newRest = new Restuarant(rest)
  // //newRest.items.push(req.body.items)
  //     newRest.save()
          Menu.create(menu)
          .then(menu => {
          res.status(201).json({menu:menu});
          })
          .catch(console.error)
    })

/* DELETE */

router.delete('/restuarants/:id', (req, res) => {
  const id = req.params.id
  Restuarant.findByIdAndDelete(id)
  .then (()=> res.sendStatus(204))
    .catch(console.error)
})

// router.delete('/restuarants/:id/Menu/:id', (req, res) => {
//     const id = req.params.id
//     Restaurant.findByIdAndDelete(id)
//     .then (()=> {
//       res.redirect('/restuarants/:id')
//     })
//   })

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

module.exports = router;