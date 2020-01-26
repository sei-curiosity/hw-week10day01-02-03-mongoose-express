const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yum', { useNewUrlParser: true , useUnifiedTopology: true, 
useFindAndModify: false, useCreateIndex: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open',()=> console.info('Mongoose connected', '//', new Date()))

    
module.exports = db 


// restrentModel.create({ name: 'the cheeseCake factory ', 
// yelpUrl: 'https://www.yelp.com/biz/the-cheesecake-factory-san-francisco-2?osq=The+Cheesecake+Factory',
// item:[menueItem[0]],
// address:{street:"The North Ring",
// zipcode: 1212 }})

// restrentModel.create({ name: 'Mona Lisa ', 
// yelpUrl: 'https://www.yelp.com/biz/mona-lisa-restaurant-san-francisco',
// item:[menueItem[0]],
// address:{street:"Columbus Ave",
// zipcode: 1232} })

// restrentModel.create({ name: 'Fog Harbor Fish House ', 
// yelpUrl: 'https://www.yelp.com/biz/fog-harbor-fish-house-san-francisco-2',
// item:[menueItem[0]],
// address:{street:"Pier",
// zipcode: 1312} })

// menuModel.create({ title:'apple' },{title:'orange' })

//   .then((restrunt) => {
//     console.log(restrunt);
//   })
//   .then((menue) => {
//     console.log(menue);
//   })
//   .catch((error) => {
//     console.log(error)
//   })

//   restrentModel.findOne({name: the }, callback)


// router.get('/restrunts', (request, response) => {
//     restrentModel.find({})
//       .then((restrunts) => {
//         response.send({ 
//             restrunts: restrunts    § 
//         })
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   })


// -- remove 


// const update = (id,field,value) =>{
//  restrentModel.findById(id)
//   .then(rest => { 
//       console.log(rest[field])
//       rest[field] = value
//       rest.save()
//   })
//   .then(console.error)
//   .then(done)
// }

// update('5e262b84b1b5204c7ba5696d', 'name','Mona Lisa')


// const destroy = (id) => {
//   restrentModel.findById(id)
//   .then(rest => {
//       rest.remove()
//   })
//   .catch(console.error)
//   .then(done)

// }
// destroy('5e262b84b1b5204c7ba5696d')