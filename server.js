var express = require('express');
var override = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller.js');

var app = express();
var PORT = process.env.PORT || 3010;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/burgers', routes);
app.use('/public', express.static('public'));

app.listen(PORT, function () {
	console.log("Listening...");
});
