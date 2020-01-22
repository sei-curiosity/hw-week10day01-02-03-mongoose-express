const express = require('express');
const router = express.Router();
//var data = require('../data.js');
let Restuarant = require('../models/Restuarant') /




/* INDEX */

router.get('/restuarants', function(req,res) {
Restaurant.find({})
.then((rest) => {
  res.render('restuarants/index', {
    restaurant: rest
        })
    })
})

/* SHOW */

router.get('/restuarants/:id', function(req,res) {
  let restId = req.params.id
  Restuarant.findById(restId)
  .then((restuarant) => {
    res.render('restuarants/show', {
    restuarant: restuarant
    });
  })
});

/* NEW*/

router.get('/restuarants/new', function(req, res){
    res.render('restuarants/new');
  });

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

router.post('/restuarants', function(req, res){
  const Rest = {
    "name": req.body.name,
    "address": req.body.address,
    "yelpUrl":req.body.yelpUrl,
};

let newRest = new Restuarant(Rest)
newRest.items.push(req.body.items)
    newRest.save()
        .then(restuarant => {
        res.redirect('/restuarants');
                })
          })
        


/* DELETE */

router.delete('/restuarants/:id', (req, res) => {
  const id = req.params.id
  Restuarant.findByIdAndDelete(id)
  .then (()=> {
    res.redirect('/restuarants')
  })
})

// router.delete('/restuarants/:id/Menu/:id', (req, res) => {
//     const id = req.params.id
//     Restaurant.findByIdAndDelete(id)
//     .then (()=> {
//       res.redirect('/restuarants/:id')
//     })
//   })

/* UPDATE FORM */

router.get('/restuarants/:id/edit', function(req, res){
    const id = req.params.id
    Restuarant.findById(id)
    .then((restuarants) => {
      console.log(restuarants)
      res.render('restuarants/edit', {
        restuarant: restuarant
      });
    })
  });
/* UPDATE */

router.put('/restuarants/:id/edit', (req, res) => {
  const id = req.params.id
  let updated = req.body
  Restuarant.findByIdAndUpdate(id, updated)
.then((restuarant) => {
  res.redirect(`/restuarants/${id}`)
})
})

module.exports = router;