const express =require('express');

const router=express.Router();

const {index,show,destroy,create,update,itemShow,itemIndex,createItem,updateItem,destroyItem}= require('../controller')




router.get('/',index)
router.get('/:id',show)
router.delete("/:id", destroy)
router.post("/", create)
router.patch("/:id", update)
router.get("/:id/items",itemIndex)
router.get('/:id/items/:itemid',itemShow)
router.post('/:id',createItem)
router.patch("/:id/items/:itemid",updateItem)
router.delete('/:id/items/:itemid',destroyItem)




module.exports=router;