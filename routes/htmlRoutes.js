var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/signup", function (req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // Render the profile page:
  app.get("/members", isAuthenticated, function (req, res) {

    res.render("index", {});

  });

  // Render the add new event page:
  app.get("/new", isAuthenticated, function (req, res) {

    res.render("new", {});

  });

  // Render the gitf page
  app.get("/gifts", isAuthenticated, function (req, res) {

    res.render("gifts", {});

  });

  //Render the join page
  app.get("/join", isAuthenticated, function (req, res) {

    var hbsObject = {
      event: {
        eventName: "Galentine's Day",
        eventDate: '2019-01-27',
        eventTime: '10:00',
        eventLocation: 'NW',
        eventDirections: ' Do what I say, buy gifts!',
        uniqueCode: '6852'
      }
    };

    res.render("join", hbsObject);

  });
};