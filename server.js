/* packages */
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
const methodOverride = require('method-override')
var bodyParser  = require('body-parser');
var Controller = require('./controllers/rest_controller.js');
var app         = express();
var port        = process.env.PORT || 5000;


app.use( logger('dev'));


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(methodOverride('_method'))

app.use('/', Controller);


app.set('view engine', 'hbs');



app.listen(port, function() {
  console.info('Server open', port,"//", new Date());
});