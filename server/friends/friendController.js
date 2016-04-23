var Sequelize = require('sequelize');
var Friend = require(__dirname + '/friendModel.js');


module.exports.getAllSaved = function(req, res) {
  var user = req.body.user;

  User.findOne({
    where: user
  })
  .then(function(foundUser) {
    return foundUser.getPlaces();
  })
  .then(function(foundPlaces) {
    res.json(foundPlaces);
  });
};

module.exports.saveOne = function(req, res) {
  var friend = req.body;
  Friend.findOrCreate({where: friend})
    .then(function(createdUser) {
      res.json(createdUser);
    });
};