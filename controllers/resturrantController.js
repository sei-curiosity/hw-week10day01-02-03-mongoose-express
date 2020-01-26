const router = require('express').Router()
const {
    resturantModel,
    menuItemModel
} = require('../db/resturrantSchema')

router.get('/', (req, res) => {
    resturantModel.find({})
        .then((resturants) => {
            res.send({
                resturants: resturants
            })
        })
        .catch((err) => console.log(err))
})

router.get('/:restid', (req, res) => {
    const restid = req.params.resid
    resturantModel.findById(restid)
        .then((resturant) => {
            res.send({
                resturant: resturant
            })
        })
        .catch((err) => console.log(err))
})

router.post('/', (req, res) => {
    const newRest = req.body
    let creatRest = new resturantModel({
        name: newRest.name,
        address: {
            street: newRest.address.street,
            zipcode: newRest.address.zipcode
        },
        yelpUrl: newRest.yelpUrl,
    })
    creatRest.save()
        .then((resturant) => {
            res.redirect(`resturrants/${resturant._id}`)
        })
        .catch(err => console.log(err))
})

router.put('/:restid', (req, res) => {
    const restid = req.params.restid
    const updatedRest = req.body
    resturantModel.findByIdAndUpdate(restid, updatedRest)
}).then((resturant) => {
    res.redirect(`resturrants/${resturant._id}`)
}).catch(err => console.log(err))

router.delete('/:restid', (req, res) => {
    const restid = req.params.restid
    resturantModel.findByIdAndDelete(restid)
}).then((resturant) => {
    res.redirect('/')
}).catch(err => console.log(err))