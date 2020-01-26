const router = require("express").Router();
const { RestaurantModel, MenuItemsModle } = require("../db/schema");

// index all Restaurant
router.get("/rest", (req, res) => {
  RestaurantModel.find({})
    .then(restaurants => {
      res.send({ restaurants: restaurants });
    })
    .catch(err => console.error(err));
});

// create Restaurant
router.post("/rest", (req, res) => {
  const newRest = req.body;
  const restaurant = new RestaurantModel({
    name: newRest.name,
    address: {
      street: newRest.address.street,
      zipcode: newRest.address.zipcode
    },
    yelpUrl: newRest.yelpUrl,
    items: newRest.items
  });
  restaurant.save().then(restaurant => res.redirect(`/rest/${restaurant._id}`));
});

// show  a specific Restaurant
router.get("/rest/:restid", (req, res) => {
  const restid = req.params.restid;
  RestaurantModel.findById(restid)
    .then(restaurant => {
      res.send({ restaurant });
    })
    .catch(err => console.error(err));
});
// show all menu for  specigic resturant
router.get("/rest/:restid/menus", (req, res) => {
  const restid = req.params.restid;
  RestaurantModel.findById(restid)
    .then(rest =>
      res.send({
        items: rest.items
      })
    )
    .catch(err => console.error(err));
});

// delete resturant
router.delete("/rest/:restid", (req, res) => {
  const restid = req.params.restid;
  RestaurantModel.findById(restid)
    .then(resturant => {
      resturant.remove();
      res.redirect("/rest");
    })
    .catch(err => console.error(err));
});

// update a resturant
router.put("/rest/:restid", (req, res) => {
  const restid = req.params.restid;
  const updateResturant = req.body;
  RestaurantModel.findByIdAndUpdate(restid, updateResturant).then(resturant =>
    res.redirect(`/rest/${resturant._id}`)
  );
});

// create a specific items for a specific resturant
router.post("/rest/:restid", (req, res) => {
  const restid = req.params.restid;
  const newItem = req.body;
  const createMenu = new MenuItemsModle({
    title: newItem.title
  });
  RestaurantModel.findById(restid)
    .then(restaurant => {
      restaurant.items.push(createMenu);
      return restaurant;
    })
    .then(restaurant => restaurant.save())
    .then(restaurant => res.redirect(`/rest/${restaurant._id}`));
});

// delete a menu for resturant
router.delete("/rest/:restid/menus/:menuid", (req, res) => {
  const restid = req.params.restid;
  const menuid = req.params.menuid;
  RestaurantModel.findById(restid)
  .then(
      resturant => {
        let index = resturant.items.findIndex(item => item._id == menuid);
        if (index > -1) {
        resturant.items.splice(index, 1);
        }
        return resturant;
    })
    .then(resturant => resturant.save())
    .then(resturant => res.redirect(`/rest/${resturant._id}/menus`))
    .catch(err => console.error(err))
});

module.exports = router;
