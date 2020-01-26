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


        const id = req.params.id
        const menuid = req.body
        const createMenu = new TweetModel ({menuid})
        Restaurant.findById(id)
        .then((id)=> {
            id.menu.push(createMenu)
            return id
        })
        .then (id => id.save())
        .catch(err => console.log(err))



 }

const destroyMenu = (req, res) => {
    const id = req.params.id
    const menuid = req.params.menuId
    Restaurant.findById(id)
    .then ((id) => {
        let index = id.menu.findIndex(x => x._id == menuid)
        if(index > -1) {
            Restaurant.menu.splice(index, 1)
        }
        return id
    })
    .then(restaurant => restaurant.save())
    .catch(err => console.log(err))

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