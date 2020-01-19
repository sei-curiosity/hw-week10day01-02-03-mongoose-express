let Schema = require("../db/schema.js");
let resturant = Schema.resturantModel;
let menu = Schema.menuModel;

resturant.remove({})
.then(()=> {
console.log("deleted all resturant")
})

.catch((error)=> {
    console.log(error)
})

menu.remove({})
.then(()=> {
    console.log("deleted all menu")
    })
    
    .catch((error)=> {
        console.log(error)
    })

    let item0 = new menu({title: "pizza"})

    let item1 = new menu({title: "burger"})

    let item2 = new menu({title: "sandwich"})

    const items = [item0, item1, item2]

    let resturanto = new resturant ({name: "dominos", address:{street:"almurabba", zipcode: "123"}, yelpUrl: "www.dominos.com", items: items})

    let resturant1 = new resturant ({name: "mac", address:{street:"almathar", zipcode: "124"}, yelpUrl: "www.mac.com", items: items})
const resturants = [resturant0,resturant1]
    resturant.insertMany(resturants)
    .then(()=>{
        console.log(`added ${resturant.length} resturants to db`)
    })
    .catch((error)=> {
        console.log(eroor)
    })