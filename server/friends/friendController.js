var Sequelize = require('sequelize');
var Friend = require(__dirname + '/friendModel.js');
var User = require(__dirname + '/../users/userModel.js');


module.exports.getAllSaved = function(req, res) {
  var user = req.body.user;

  User.findOne({
    where: user
  })
  .then(function(foundUser) {
    return foundUser.getFriend();
  })
  .then(function(foundFriend) {
    res.json(foundFriend);
  });
};

module.exports.saveOne = function(req, res) {
  var friend = req.body;
  Friend.findOrCreate({where: friend})
    .then(function(createdUser) {
      res.json(createdUser);
    });
};