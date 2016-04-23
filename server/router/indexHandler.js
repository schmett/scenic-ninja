import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../client/reducers/index';
import App from '../../client/components/App';
import renderFullPage from '../views/index';
var User = require(__dirname + '/../users/userModel.js');


// Handler for rendering the index page with user data, if available
// http://redux.js.org/docs/recipes/ServerRendering.html
module.exports = function(req, res) {
  // Initialize user state if user is logged in
  var user = {};
  var savedPlaces = [];
  var saveFriend = [];

  var sendInitialState = function() {
    // Create a new Redux store instance
    const store = createStore(rootReducer, {
      places: [],
      savedPlaces: savedPlaces,
      user: user,
      saveFriend: saveFriend
    });

    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
      <App />
      </Provider>
    );

    // Grab the initial state from our Redux store
    const initialState = store.getState();

    // Send the rendered page back to the client as a String
    res.send(renderFullPage(html, initialState));

  };

  if (req.session.passport && req.session.passport.user) {
    user = {
      googleUserId: req.session.passport.user.id,
      firstName: req.session.passport.user.name.givenName || null,
      lastName: req.session.passport.user.name.familyName || null
      // avatarUrl: req.session.passport.user.photos[0].value || null,
    };

    User.findOne({
        where: user
      })
      .then(function(foundUser) {
        console.log('foundUser', foundUser);
        return foundUser.getFriends();
      })
      .then(function(foundFriends) {
        console.log('foundFriends',foundFriends);
        saveFriend = foundFriends;
      });


    User.findOne({
        where: user
      })
      .then(function(foundUser) {
        return foundUser.getPlaces();
      })
      .then(function(foundPlaces) {
        savedPlaces = foundPlaces;
        sendInitialState();
      });
  } else {
    sendInitialState();
  }

}
