const { Router } = require("express");

const restaurantsController = require("./controller/restaurants");
const menuController = require("./controller/menu");

const router = Router();

// restaurants endpoints
router.get("/", restaurantsController.index);
router.get("/new/", restaurantsController.add);
router.get("/:id/edit/", restaurantsController.edit);

router.get("/:id/", restaurantsController.show);
router.post("/", restaurantsController.create);
router.put("/:id/", restaurantsController.update);
router.delete("/:id/", restaurantsController.destroy);

// menu endpoints
router.get("/:id/menu/", menuController.index);
router.get("/:id/menu/:item/", menuController.show);
router.post("/:id/menu/", menuController.create);
router.put("/:id/menu/:item/", menuController.update);
router.delete("/:id/menu/:item/", menuController.destroy);

module.exports = router;
