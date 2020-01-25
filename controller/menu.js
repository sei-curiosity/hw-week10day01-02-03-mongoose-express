const Schema = require("../db/schema");

function index(request, response) {
  Schema.Restaurant.findById(request.params.id).then(restaurant => {
    const items = restaurant.items;

    response.render("menu/index", { data: items });
  });
}

function add(request, response) {}

function edit(request, response) {}

function show(request, response) {}

function create(request, response) {}

function update(request, response) {}

function destroy(request, response) {}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};
