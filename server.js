var express = require('express');
var override = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3010;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, function () {
	console.log("Listening...");
});