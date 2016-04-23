var path = require('path');
var auth = require(__dirname + '/../auth/auth');
var placeController = require(__dirname + '/../places/placeController');
var userController = require(__dirname + '/../users/userController');
var friendController = require(__dirname + '/../friends/friendController');
var renderIndex = require(__dirname + '/indexHandler');


module.exports = function(app, express) {
  app.use(express.static(__dirname + '/../../client'));
  app.get('/home', renderIndex);

  app.get('/api/places', placeController.searchGoogle);

  app.post('/api/places/saved', auth.checkAuth, placeController.saveOne);
  app.get('/api/places/saved', auth.checkAuth, placeController.getAllSaved);
  app.delete('/api/places/saved', auth.checkAuth, placeController.deleteOne);

  app.get('/api/friend/saved', auth.checkAuth, friendController.getAllSaved);

  app.post('/api/users', userController.saveOne);

  app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../../client/login.html'));
  });

  app.get('/auth/google', auth.handleGoogleLogin);

  app.get('/auth/google/callback', auth.authenticateGoogleLogin,
    function(req, res) {
      res.redirect('/home');
    }
  );

  app.get('/auth/logout', function(req, res) {
    req.session.destroy(function() {
      res.redirect('/');
    });
  });
};
