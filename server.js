const express = require('express')
const app = express();
const resturant_controller = require('./controllers/resturant_controller')

// app.get('/', function(req,res){
// res.send('hello world')
// });

app.use("/", resturant_controller)
app.listen(3000, function() {
    // tells the server where to listen for requests on port 3000
    console.log('hello-express');
  }); 