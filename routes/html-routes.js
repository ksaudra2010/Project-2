// Requiring path to so we can use relative routes to our HTML files
<<<<<<< HEAD
const path = require('path');

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function(app) {

  app.get('/', function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    }
    res.sendFile(path.join(__dirname, '../public/signup.html'));
  });

  app.get('/login', function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    }
    res.sendFile(path.join(__dirname, '../public/login.html'));
=======
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
>>>>>>> 18b5435854dfbb03908d942f4b6b21e01245ea9f
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
<<<<<<< HEAD
  app.get('/members', isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, '../public/members.html'));
  });
=======
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

>>>>>>> 18b5435854dfbb03908d942f4b6b21e01245ea9f
};
