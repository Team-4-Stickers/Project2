var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    //res.sendFile(path.join(__dirname, "../public/members.html"));

    //connection.query(function (error, data) {
    // if (err) throw err;
    res.render("index", {
      members: data
    });
  });
  //});
  /*
            app.get("/", function(req, res) {
                res.render("index", {members:data});
              });
            });*/

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function (req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    console.log("here");
    res.render("index", {
      members: data
      // res.sendFile(path.join(__dirname, "../public/members.html"));
    });

    //TESTING HANDLEBARS
    app.get("/handlebars", isAuthenticated, function (req, res) {

      res.render("index", {});

    });
  });
};