// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    console.log(req.body.avatar_source);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      avatar_source: req.body.avatar_source,
    }).then(function () {
      res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {

    console.log(req.user);

    db.User.findOne({ where: { email: req.user.email } }).then(function (userData) {
      res.json(userData);
    });

  });

  //Get the event object and send it to the database
  app.post("/api/event", function (req, res) {
    console.log(req.body.eventName);
    db.Event.create({
      eventName: req.body.eventName,
      eventDate: req.body.eventDate,
      eventTime: req.body.eventTime,
      eventLocation: req.body.eventLocation,
      eventDirections: req.body.eventDirections,
      uniqueCode: req.body.uniqueCode,

    }).then(function () {
      res.redirect(307, "/api/new");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      res.status(422).json(err.errors.message);
    });
    console.log(req.body);
  });

  app.get("/api/event/:eventName", function (req, res) {
    db.Event.findOne({
      where: {
        eventName: params.body.eventName
      }
    }).then(function (dbEvent) {
      console.log(dbEvent);
      res.json(dbEvent);
    });
  });

  app.get("/api/join/:uniqueCode", function (req, res) {

    console.log(req.params.uniqueCode);

    db.Event.findOne({
      where: {
        uniqueCode: req.params.uniqueCode
      }
    }).then(function (dbEvent) {

      console.log(dbEvent);

      res.json(dbEvent);

    });
  });

  app.post("/api/gift", function (req, res) {
    console.log(req.body);
    db.Gift.create({
      giftName: req.body.giftName,
      // giftEvent: req.body.giftEvent,
      priceRange: req.body.priceRange,
      giftLink: req.body.giftLink,
      giftComment: req.body.giftComment,
      giftStatus: false
    }).then(function (result) {
    });
  });

  app.delete("/api/gift/:id", function (req, res) {
    db.Gift.destroy({
      where: {
        id: req.params.id
      }
    }).then(function () {
      res.end();
    });
  });

  app.put("/api/eventadded/:id", function (req, res) {

    var status = Boolean(req.body.eventStatus);
    console.log(status);
    console.log(req.params.id);

    db.Event.update(
      {
        eventStatus: status
      },
      {
        where: {
          id: req.params.id
        }
      }).then(function (result) {
        if (result.changedRows === 0) {
          // If no rows were added, then the ID must not exist, so 404
          return res.status(404).end();
        }

        res.status(200).end();
      });
  });

};