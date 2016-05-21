var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/User');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        User.findOne({ "local.email":  email }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a user with that email
            if (!user) {
                return done(null, false, req.flash('loginMessage', 'No user with this username.'));
            }
            if(!user.validPassword(password))
              return done(null, false, req.flash('loginMessage', 'Wrong password.'))
            else
              done(null,user);


      });

    }));

    passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        User.findOne({ "local.email":  email }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a user with that email
            if (user) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            }
      });
      var newUser = new User();
      newUser.local.email    = email;
      newUser.local.password = newUser.generateHash(password);
      newUser.save(function(err) {
        if (err)
          throw err;
        return done(null, newUser);
      });

    }));

};
