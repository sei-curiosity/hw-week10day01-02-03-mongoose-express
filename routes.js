const { Router } = require("express");

const restaurantsController = require("./controller/restaurants");
const menuController = require("./controller/menu");

const router = Router();

// restaurants endpoints
router.get("/restaurants/", restaurantsController.index);
router.get("/restaurants/:id/", restaurantsController.show);
router.post("/restaurants/", restaurantsController.create);
router.put("/restaurants/:id/", restaurantsController.update);
router.delete("/restaurants/:id/", restaurantsController.destroy);

// menu endpoints
router.get("/restaurants/:id/menu/", menuController.index);
router.get("/restaurants/:id/menu/:item/", menuController.show);
router.post("/restaurants/:id/menu/", menuController.create);
router.put("/restaurants/:id/menu/:item/", menuController.update);
router.delete("/restaurants/:id/menu/:item/", menuController.destroy);

module.exports = router;
