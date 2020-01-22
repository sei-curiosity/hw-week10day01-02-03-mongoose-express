const {Menu, Restaurant} = require('./seed')

const index = (req, res) => {
    Restaurant.find({})
    .then(
        restaurant => res.send(restaurant)
    )
    .catch(
        err => res.send(err)
    )
}



const show = (req, res) => {
    const id = req.params.id
    Restaurant.findById(id)
    .then(
        restaurant => res.send(restaurant)
    )
    .catch(
        err => res.send(err)
    )
}


const create = (req, res) => {
   const params = req.body
    const restaurant = new Restaurant(params)
    restaurant.save()
    .then(
        restaurant => res.send(restaurant)
    )
    .catch(
        err => res.send(err)
    )
}



const destroy = (req, res) => {
    const id = req.params.id
    Restaurant.findById(id)
    .then(
        restaurant => restaurant.remove()
        .then(
            restaurant => res.send(" deleted")
        )
        .catch(
            err => res.send(err)
        )
    )
    .catch(
        err => res.send(err)
    )
}



const update = (req, res) => {
    const title = req.body.title
    const id = req.params.id
    Restaurant.update(
        {_id: id},
        {$set: {title: title}}
    )
    .then(
        restaurant => res.send(restaurant)
    )
    .catch(
        err => res.send(err)
    )
}

const createMenu = (req, res) => {
    const params = req.body
     const menu = new Menu(params)
     menu.save()
     .then(
        menu => res.send(menu)
     )
     .catch(
         err => res.send(err)
     )
 }

 const destroyMenu = (req, res) => {
    const id = req.params.id
    Restaurant.findById(id)
    .then(
        menu => menu.remove()
        .then(
          res.send(" deleted")
        )
        .catch(
            err => res.send(err)
        )
    )
    .catch(
        err => res.send(err)
    )
}

module.exports = {
    index,
    show,
    create,
    createMenu,
    destroy,
    destroyMenu,
    update
}