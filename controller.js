const db = require("./config")
const Schema=require('./db/schema.js')
const MenuItemModel =Schema.MenuItemModel
const RestaurantModel=Schema.RestaurantModel
const item1=new MenuItemModel({title:"burger"})
   const item2=new MenuItemModel({title:"milk"})  
       const items=[item1,item2]
   

// const create = (name,address,yelpUrl,items)=>{
//    const restrantPrams={ 
//     name:name,
//     address:address,
//     yelpUrl:yelpUrl,
//     items:items
// }
//     RestaurantModel.create(restrantPrams)
//      .then(restrants=>{
//        console.log(restrants)
//      })
//     .catch(error=> console.log(error))
    
//    }
  

//create('herfy','street','ylep',items)
const index=(req,res)=> {
    RestaurantModel.find({})
    .then(
    
        resturants => res.send(resturants)
        )
    
    .catch(
        err => console.error
    )
}
const show = (req, res) => {
    const id = req.params.id
    RestaurantModel.findById(id)
    .then(
        resturants => res.send(resturants)
    )
    .catch(
        err => res.send(err)
    )
}
const destroy=(req,res)=>{
    const id = req.params.id
    RestaurantModel.findById(id)
    .then(
        restrant=>restrant.remove()
    )
    .then(  
        restrant => res.send(restrant.name + " deleted")
    )
    .catch(
        err => res.send(err)

    )
}
     const update=(req,res)=>{
      const id = req.params.id
       const updateRestran=req.body
      RestaurantModel.findById(id,updateRestran)
     .then((restrant)=>{
        res.redirect(`/restrants/${id}`)
     }
     )
    .then(  
      restrant => res.send(restrant.name + "update")
     )
     .catch(
        err => res.send(err)

    )
}
//crete with body parser
const create=(req,res)=>{
    newRestrant=req.body //get the info from body parser
    createRestrant= new RestaurantModel({
         
            name:newRestrant.name,
            address:newRestrant.address,
            yelpUrl:newRestrant.yelpUrl,
            items:items
        

    })
    createRestrant.save()
    .then((restrant)=>{
        res.redirect(`/restrants/${restrant._id}`)
       })
       .catch(err => console.log(err))     
    


}
//
const itemShow=(req,res)=>{
    const id = req.params.id
    itemid=req.params.itemid
    RestaurantModel.findById(id)
    .then((restrant)=>{
        const currrentitem = restrant.items.find(x=> x._id == itemid)
        res.send({
         item:currrentitem
        })
    })
}
const itemIndex=(req,res)=>{
 const id =req.params.id
 RestaurantModel.findById(id)
 .then((restrant)=>{
     res.send({
         items:restrant.items
        })
})}

const createItem= (req, res)=> {
      id = req.params.id
    const newItem = req.body
    const createItem = new MenuItemModel ({"title": newItem.title})
    RestaurantModel.findById(id)
    .then((restrant)=> {
        restrant.items.push(createItem)
        return restrant
    })
    .then (restrant => restrant.save())
    .then((saveNewMenu)=> {
        res.redirect(`${id}`)
    })
    .catch(err => console.log(err))
    }
    const updateItem=(req,res)=>{
        const id = req.params.id
        const itemid = req.params.itemid
        const updatedItem = req.body
        RestaurantModel.findById(id)
        .then((restrant)=> {
            let index = restrant.items.findIndex(x => x._id == itemid)
            restrant.items[index].title = updatedItem.title
            return restrant
        })
        .then (restrant=> restrant.save())
        .then((restran) => res.redirect(`${itemid}`))
        .catch(err => console.log(err))
    }
    //delete item menu from restrant
    const destroyItem =(req,res)=>{
        const id = req.params.id
        const itemid = req.params.itemid
        RestaurantModel.findById(id)
        .then((restrant)=>{
            let index=restrant.items.findIndex(x=> x._id == itemid)
            if (index > -1){
                restrant.items.splice(index,1)
            }
            return restrant
        })
        .then(restrant=>restrant.save())
        .then(()=>res.redirect(`${id}`))
        .catch(err => console.log(err))
    }
    
    
    

module.exports = {index,show,destroy,create,update,itemShow,itemIndex,createItem,updateItem,destroyItem}