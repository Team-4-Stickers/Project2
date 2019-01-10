// Requiring our models and passport as we've configured it
var db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    // Render the profile page:
    app.get("/members", isAuthenticated, function (req, res) {

        db.Gift.findAll().then(function (giftObject) {

            console.log(giftObject);

            res.render("index", { gift: giftObject });

        });
    });

    // Render the add new event page:
    app.get("/new", isAuthenticated, function (req, res) {

        res.render("new", {});

    });

    // Render the gitf page
    app.get("/gifts", isAuthenticated, function (req, res) {

        res.render("gifts", {});

    });

    // Render the join page
    app.get("/join", isAuthenticated, function (req, res) {

        res.render("join", {}); 

    });

};