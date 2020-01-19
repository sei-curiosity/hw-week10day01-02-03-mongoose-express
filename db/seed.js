let Schema = require("./schema");

let item1 = new Schema.MenuModel({
    title: "Donats"
})

let items = [item1]
let dankin = new Schema.ResturantModel({ 
    name: "Dankin",
    adress: {street: "King Salman", zipcode: 1423},
    yelpUrl: "http://yelp.com",
    items: items
})

// dankin.items.push(item1)

dankin.save()
  .then((resturant) => {
    console.log(resturant);
  })
  .catch((error) => {
    console.log(error)
  })
