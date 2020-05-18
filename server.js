var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var methodOverride = require("method-override")

var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));




app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});