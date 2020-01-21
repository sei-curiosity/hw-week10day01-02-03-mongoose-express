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

const create = (rest) => {
    resturantModel.create(resturantParams)
    .then(
        resturant => console.log(rest)
    )
    .catch(
        error => console.error(error)
    )
}

// create({name:'hardees', address:{street:'alsulaymaniah', zipcode:'345' },yelpUrl:'wwww.hardees.com', items: items})

const index = () => {
    // to communicate with anythin in the db i have to communicate with the model first
    resturant.find({}) //empty because i don't have any conditions
    .then(
        myresturant => console.log(myresturant)
    )
    .catch(
        error => console.error(error)
    )
}

// index()

const show = (resturantID) => {
    resturant.find({_id: resturantID})
    .then(
        myresturant => console.log(myresturant)
    )
    .catch(
        error => console.error(error)
    )
}

// show()

const destroy = resturantID => {
    resturant.find({_id: resturantID})
    .then(
        myresturant=> console.log(myresturant)
    )
    .catch(
        error=> console.error(error)
    )
    .catch(error => console.error(error))
}

// destroy()

const update = id => {
    resturant.update(
    {_id: id}, {$set: {name:'kfc'}}
    )
    .then (
        result => console.log(result)
    )
}
//update()