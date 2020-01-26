const express = require('express')
 const router = express.Router()
 const Schema = require("../db/schema.js")
 const resturant = Schema.resturantModel
 const menu = Schema.menuModel

 //index
 router.get('/resturants/:resturantid/menue/menuid',(req,res)=> {
     const resturantid = req.params.resturantid
    resturantModel.findById(resturantid)
    .then((resturant)=> {
        res.send({
            menus: resturant.menus
        })
    })
    .catch(
    error=>console.error( error)  
    )
})

//create
router.post('/resturants/:resturantid', (req,res) => {
    // const newMenu = req.body.menu;
    const resturantid = req.params.resturantid
    // const menuid = req.params.menuid
    const newMenu = req.body;
    createMenu = new menuModel ({title: newMenu.title})
    // resturantModel.create(newMenu)
    // .then (
    //     menu => {
    //         res.status(201).json({menu: menus})
    //     })
    //     .catch(
    //         error=> console.error(error)
    //     )
    resturantModel.findById(resturantid)
    .then((resturant)=>{
        resturant.menus.push(createMenu)
        return resturant
    })
    .then( resturant => resturant.save())
    .then((savedResturantWithNewMenu)=>{
        res.redirect(`resturants/${resturantid}`)})
   
    .catch (error=>console.error(error))
})

//show

router.get('resturants/:resturantid/menus/:id',(req,res)=> {
    const resturantid = req.params.resturantid
    const menuId=req.params.id
    resturantModel.findById(resturantid)
    .then(
        (resturant)=>{
            // res.status(200).json({menu: menus})
            const currentMenu = resturant.menus.find(menu => menu._id == menuid)
            res.send({currentMenu})
        }
    )
    .catch(
        error => console.error(error)
    )
})

//update patch

router.patch('/resturants/:resturantid/menu/:id',(req,res)=>{
    // const menuBody = req.body.menu
    // const menuID = req.params.id
    const resturantid = req.params.resturantid
    const menuid = req.params.menuid
    const updatedmenu = req.body
    resturantModel.findById(resturant)
    .then(resturant =>{
        // return menu.update(menuBody)
        let index = resturant.menus.findIndex (x=>x._id == menuid )
        resturant.menus[index].title = updatedmenu.title
    })
    .catch(
        error => console.log(error)
    )
    .then(
        resturant => resturant.save()
    )
})

//delete

router.delete('resturants/:resturantid/menu/:menuid',(req,res)=> {
    const resturantid = req.params.id
    const menuid = req.params.id
    resturantModel.findByIdAndDeleteO(resturantid)
    .the((resturant)=> {
        let index = resturant.menu.findIndex( x=> z._id == menuid)
        if(index > -1 ) {
            resturant.menu.splice(index,1)
        }
        return resturant
    }
    .then(resturant => resturant.save())
    .then(()=> res.redirect(`/resturnats/${resturantid}/menus`))
    
    .catch(console.error))
})

module.exports.router