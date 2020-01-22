const express = require("express")
const {index, show, create, destroy, update} = require("./seed")
const router = express.Router()

router.get("/", index);
router.get("/:id", show)
router.delete("/:id", destroy)
router.post("/", create)
router.patch("/:id", update)

module.exports = router