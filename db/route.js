const express = require("express")
const {index, show, create, destroy, update, destroyMenu,createMenu} = require("./seed")
const router = express.Router()

router.get("/restaurants", index);
router.get("/restaurants/:id", show)
router.delete("/restaurants/:id", destroy)
router.post("/restaurants", create)
router.patch("/restaurants/:id", update)
router.delete("restaurants/:id/menus/muneId", destroyMenu)
router.post("restaurants/:id/menus/muneId", createMenu)

module.exports = router