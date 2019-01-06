require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var passport = require("./config/passport");
var session = require("express-session");
var randomCodes = require("./config/randomCodes");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = false;
}
console.log(syncOptions);
// Starting the server, syncing our models ------------------------------------/

db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port " + PORT + ". Visit http://localhost:" + PORT + "/ in your browser.");

  });

});

var assert = require('assert');

//RANDOM CODE GENERATOR
var RandomCodes = require('./config/randomCodes');
var rc = new RandomCodes();
console.log("OPTIONS: %j", rc.getOptions());
var code = rc.generate();
console.log("CODE: %s", code);


console.log(syncOptions);

module.exports = app;
