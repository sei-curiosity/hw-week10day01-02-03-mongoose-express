// require necessary NPM packages
const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const cors = require("cors");


const resturentRout = require('./routes/resturentRout')


const expressPort = 3003;

// instantiate express application object
const app = express();

app.use(resturentRout)
// run API on designated port (3000 in this case)
app.listen(expressPort, () => {
    console.log("listening on port " + expressPort);
  });
  
  // needed for testing
  module.exports = app
  