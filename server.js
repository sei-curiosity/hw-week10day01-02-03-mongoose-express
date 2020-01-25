// require express
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// require database configuration logic
const db = require('./config');
// require route files
const restrantRouter = require('./routes/resturants_route');
// register route files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/',restrantRouter);
//server
const port = 3000;
app.listen(port,() => {
    console.log(`Server running at port ${port}`)
})