const express = require("express")
const RestRoute = require("./routers/Rest_rout")

const app = express();
const db = require('./config')


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(RestRoute)




app.listen(3000, () => console.log("Server runing at port 3000"))


