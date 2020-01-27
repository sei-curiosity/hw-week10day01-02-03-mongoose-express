mongoose.connect('mongodb://localhost/yum');
const db = mongoose.connection;
db.on('error', console.error(console,'error'));
let Schema = mongoose.Schema
let MenuSchema = new Schema({
    title: String
})
let RestaurantSchema = new Schema({ name: String,address: {street:String, zipcode:Number},yelpUrl: String, items: [MenuSchema]})
let MenuModel = mongoose.model("Menu",MenuSchema)
let RestaurantModel = mongoose.model("Restaurant",RestaurantSchema)

module.exports = { RestaurantModel: RestaurantModel, MenuModel: MenuModel}
