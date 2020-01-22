const mongoose = require('mongoose');
const url = `mongodb://localhost/restuarant-crud`
mongoose.connect(url,{
    useUnifiedTopology: true,
     useNewUrlParser: true 
    })

const db = mongoose.connection

const done = function(){
    db.close()
}

// import model
const Schema = require("./db/schema")
const Restaurant = Schema.Restaurant
const Menu = Schema.Menu


///     CRUD    ///

//>>>
// create 
//works except createMenu
const createMenu = (title) => {
    const  menuParams = {
        title:title
    }
    let newMenuItem = new Menu(menuParams);
     newMenuItem.save()
}

const create = (name,street,zipcode,yelpUrl,item) => {
    const  restuarantParams = {
        name : name,
        address:{
            street:street,
            zipcode:zipcode
        },
        yelpUrl:yelpUrl,
        items:[]
    }
    let newRest = new Restaurant(restuarantParams)
    const Menuitem = createMenu(item)
    newRest.items.push(Menuitem)
    newRest.save()
    .then(restuarant => {
       console.log(restuarant)
    })
    .catch(err => {
        console.log(err)
    })
    .then(done)
}
create('pizza-k','qarsha street',11655,'https://www.yelp.com/biz/in-n-out-burger-san-francisco','pizza')
// //<<< 


// index
//>>>
//for testing purposes
const index = function() {
    Restaurant.find()
    .then(restuarants => {
        console.log(restuarants)
    })
    .catch(console.error)
    .then(done)
}
// index()
//<<<


//show 
//>>>
//works
const show = (name) => {
    Restaurant.find({name})//other way find({name:ciorkro})
    .then(restuarant => {
        console.log(restuarant)
    })
    .catch(console.error)
    .then(done)
}
//show('b-burger')
//<<<
//work
const showAdd = (zipcode) => {
    Restaurant.find({"address.zipcode":zipcode})
    .then(restuarant => {
        console.log(restuarant)
    })
    .catch(console.error)
    .then(done)
}
//showAdd(11655)
//<<<


// destroy 
//>>>
//works
const destroy = (id) => {
    Restaurant.findById(id)
    .then(restuarant => {
    return restuarant.remove()
})
.catch(console.error)
.then(done)
}
//destroy('5e2674df6253e160877822a2')
//index()

//not completed
// const destroy = (item,id) => {
//     let rest = Restaurant.find({items})
//     rest.find()
//     .then(restuarant => {
//     return restuarant.remove()
// })
// .catch(console.error)
// .then(done)
// }
//<<<



// update 
//>>>
//works
const update = (id,field,value) => {
    Restaurant.findById(id)
    .then(restuarant => {
        console.log(restuarant[field])
        restuarant[field] = value
        return restuarant.save()
    })
    .catch(console.error)
    .then(done)
}
//update('5e2676969c77a56234890b33','name','luha')
//<<<


