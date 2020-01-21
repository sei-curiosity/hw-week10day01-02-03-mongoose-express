const {RestaurantModel, MenuModel, db} = require("./schema")
let pizza = new MenuModel({title:"Pizza"});
let Yumm = new RestaurantModel ({name: "Yumm", 
                        adress: {street:"Waha street",zipcode:11655},
                        yelpUrl:"https://www.yelp.com/biz/monza-pizzeria-san-francisco?osq=delivery"})
Yumm.items.push(pizza)
Yumm.save()
.then((restuarant) => {
    console.log(restuarant)
    db.close()
  })
  .catch((error) => {
    console.log(error)
  })