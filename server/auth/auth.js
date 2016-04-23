var googleKeys = require(__dirname + '/../config/googleplus');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth');
var User = require(__dirname + '/../users/userModel');
var Friend = require(__dirname + '/../friends/friendModel');
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(googleKeys.CLIENT_ID, googleKeys.CLIENT_SECRET, '/');
var plus = google.plus({version: 'v1', auth: oauth2Client});
google.options({ auth: oauth2Client });

// Middleware for checking whether the user is logged in
module.exports.checkAuth = function (req, res, next) {
  if (req.session.passport ? req.session.passport.user : false) {
    next();
  } else {
    req.session.error = 'Bad credentials.';
    res.redirect('/');
  }
};

module.exports.handleGoogleLogin = passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profiles.read'
  ]
});

module.exports.authenticateGoogleLogin = passport.authenticate('google', {
  failureRedirect: '/'
});

/*
serializeUser and deserializeUser are two required Passport methods that are
called when using sessions with Passport.

http://toon.io/understanding-passportjs-authentication-flow/
*/

// Determines what user data should be stored in the session
passport.serializeUser(function(user, done) {
  done(null, user);
});

// Determines what user data should be retrieved from the session
passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy.OAuth2Strategy({
  clientID: googleKeys.CLIENT_ID,
  clientSecret: googleKeys.CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}, function(accessToken, refreshToken, profile, done) {
  // Create a user if it is a new user, otherwise just get the user from the DB
   oauth2Client.setCredentials({
    access_token: accessToken
  });

  User
    .findOrCreate({
      where: {
        googleUserId: profile.id
      },
      defaults: {
        firstName: profile.name.givenName,
        lastName: profile.name.familyName
      }
    })
    // Spread is used for functions that return multiple success values
    // e.g. findOrCreate returns a user and a boolean wasCreated
    .spread(function(user, created) {
      console.log('User data returned from User.findOrCreate: ', user.get({
        plain: true
      }));
      console.log('New User Created? (t/f): ', created);
      // Below is an example of what comes back to spread from findOrCreate
      // (see above console.logs), assumes that user didn't exist already
      /*{
         firstName: 'Lack',
         lastName: 'Zester',
         id: 411911551212,
       }
       created: true*/
    });

    plus.people.list({collection:"visible", userId: 'me', auth: oauth2Client }, function(err, response) {
      console.log('Responde Google+', response);
      for (var i = 0; i < 10; i++){
        //console.log(response.items[i]);
        // User.findOne({
        //   where: {
        //     googleUserId: profile.id
        //     }
        //   })
        // .then(function(foundUser) {
        //   console.log('User++-------++');
        //   // Friend.findOrCreate({
        //   //   where: {
        //   //     googleFriendId:response.items[i].id
        //   //   }, 
        //   //   defaults:{
        //   //     googleUserId: profile.id, 
        //   //     googleFriendId: response.items[i].id, 
        //   //     name: response.items[i].name, 
        //   //     url: response.items[i].url,
        //   //     image: response.items[i].image.url
        //   //   }
        //   // })
          
        //   //.spread(function(foundOrCreatedFriend) {
        //   console.log('Create', response.items[0]);
        //   Friend.create({ googleUserId: profile.id, googleFriendId: response.items[0].id, name: response.items[0].name, url: response.items[0].url,image: response.items[0].image.url}).then(function(friend) {
        //     console.log('Create');
        //     // console.log('foundOrCreatedPlace--========---',friend);
        //     foundUser.addFriend(friend);
        //     });
        //   });
        // // });

        Friend.create({ googleUserId: profile.id, googleFriendId: response.items[0].id, name: response.items[i].displayName, url: response.items[i].url,image: response.items[i].image.url}).then(function(friend) {
          console.log('Friend Saved');
        })
      }
    });




  return done(null, profile);
}));
