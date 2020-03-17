<<<<<<< HEAD
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var db = require('../models');
=======
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");
>>>>>>> 18b5435854dfbb03908d942f4b6b21e01245ea9f

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
<<<<<<< HEAD
    usernameField: 'email',
=======
    usernameField: "email"
>>>>>>> 18b5435854dfbb03908d942f4b6b21e01245ea9f
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
<<<<<<< HEAD
          message: 'Incorrect email.'
=======
          message: "Incorrect email."
>>>>>>> 18b5435854dfbb03908d942f4b6b21e01245ea9f
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
<<<<<<< HEAD
          message: 'Incorrect password.'
=======
          message: "Incorrect password."
>>>>>>> 18b5435854dfbb03908d942f4b6b21e01245ea9f
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
