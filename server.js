// require express
var path = require('path');
const express = require('express');
const app = express();
var hbs = require('hbs');
const bodyParser = require("body-parser");

// require database configuration logic
const db = require('./config');
// require route files
const restrantRouter = require('./routes/resturants_route');
// register route files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'hbs');
app.use('/restrants',restrantRouter)
app.get('/', function(req,res) {
    res.send('This is our Home Page');
  });
  
// app.get('/greeting',function(req,res){
//   res.render('greeting')
// })


//server
const port = 3000;
app.listen(port,() => {
    console.log(`Server running at port ${port}`)
})