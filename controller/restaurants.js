const mongoose = require("mongoose");
const Schema = require("../db/schema.js");

mongoose.connect("mongodb://localhost/yum", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", error => console.log("connection error:", error));
db.once("open", () => console.log("database successfully connected"));

function index(request, response) {
  Schema.Restaurant.find({})
    .then(restaurants => {
      response.render("restaurants/index", { data: restaurants });
    })
    .catch(console.log);
}

function add(request, response) {
  response.render("restaurants/add");
}

function show(request, response) {
  Schema.Restaurant.findById(request.params.id)
    .then(restaurant => {
      response.render("restaurants/show", { data: restaurant });
    })
    .catch(console.log);
}

function create(request, response) {
  Schema.Restaurant.create({
    name: request.body.name,
    address: {
      street: request.body.street,
      zipcode: request.body.zipcode
    },
    yelpUrl: request.body.yelpUrl
  })
    .then(() => {
      response.redirect("/");
    })
    .catch(console.log);
}

function edit(request, response) {
  Schema.Restaurant.findById(request.params.id)
    .then(restaurant => {
      response.render("restaurants/edit", { data: restaurant });
    })
    .catch(console.log);
}

function update(request, response) {
  Schema.Restaurant.findByIdAndUpdate(
    request.params.id,
    {
      name: request.body.name,
      address: {
        street: request.body.street,
        zipcode: request.body.zipcode
      },
      yelpUrl: request.body.yelpUrl
    },
    {
      new: true,
      omitUndefined: true
    }
  )
    .then(() => {
      response.redirect(`/`);
    })
    .catch(console.log);
}

function destroy(request, response) {
  Schema.Restaurant.findByIdAndDelete(request.params.id)
    .then(() => {
      response.redirect("/");
    })
    .catch(console.log);
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
  add,
  edit
};
