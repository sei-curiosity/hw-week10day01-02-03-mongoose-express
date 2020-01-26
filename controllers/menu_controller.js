const express = require('express')
 const router = express.Router()
 const Schema = require("../db/schema.js")
 const resturant = Schema.resturantModel
 const menu = Schema.menuModel

 //index
 router.get('/menue',(req,res)=> {
    menu.find({})
    .then((menu)=> {
        res.send({
            menu: menus
        })
    })
    .catch(
    error=>console.error( error)  
    )
})

//create
router.post('/menu', (req,res) => {
    const newMenu = req.body.menu;
    menu.create(newMenu)
    .then (
        menu => {
            res.status(201).json({menu: menus})
        })
        .catch(
            error=> console.error(error)
        )
})

//show

router.get('/menus/:id',(req,res)=> {
    const menuId=req.params.id
    menu.findById(menuId)
    .then(
        menu=>{
            res.status(200).json({menu: menus})
        }
    )
    .catch(
        error => console.error(error)
    )
})

//update patch

router.patch('/menu/:id',(req,res)=>{
    const menuBody = req.body.menu
    const menuID = req.params.id
    menu.findById(menuId)
    .then(menu =>{
        return menu.update(menuBody)
    })
    .catch(
        error => console.log(error)
    )
    .then(
        () => res.sendStatus(204)
    )
})

//delete

router.delete('/menu/:id',(req,res)=> {
    const studentId = req.params.id
    menu.findByIdAndDeleteO(studentId)
    .the(()=> Response.sendStatus(204))
    .catch(console.error)
})

module.exports.router