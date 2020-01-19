let { Restaurant, MenuItem, db } = require("./schema.js");

const restaurant2 = new Restaurant({
  name: "Dunkkin",
  address: { street: "Al Faisal", zipcode: 8174961 },
  yelpUrl: "https://www.yelp.com/"
});
const menuItem2 = new MenuItem({ title: "Chocolate Donats" });
const menuItem3 = new MenuItem({ title: "Coffee" });

restaurant2.items.push(menuItem3);
restaurant2.items.push(menuItem2);

restaurant2
  .save()
  .then(r => console.log(r))
  .then(() => db.close())
  .catch(err => console.log(err));
