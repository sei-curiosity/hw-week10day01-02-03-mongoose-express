// import express 
const express = require('express')
// import router into express
const router = express.Router()

const Menu = require('../models/menu')
const Resturent = require('../models/resturent')

router.get('/resturent',(req, res, next)=>{
    console.log(req);
    
    Resturent.find()
    .then(resturent => { 
        res.status(200).json({})
        // res.status(200).json({resturent:resturent})

    })
     .catch(next);
        
    })
    
    module.exports = router