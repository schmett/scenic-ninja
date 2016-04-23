module.exports = function() {
  var db = require(__dirname + '/db.js');
  var Place = require(__dirname + '/../places/placeModel.js');
  var User = require(__dirname + '/../users/userModel.js');
  var Friend = require(__dirname + '/../friends/friendModel.js');

  Place.belongsToMany(User, {through: 'UserPlace'});
  User.belongsToMany(Place, {through: 'UserPlace'});
  Friend.belongsToMany(User,{through: 'UserFriend'});
  User.belongsToMany(Friend,{through: 'UserFriend'});
  // Place.sync(); //use {force: true} option to drop existing tables
  // User.sync();
  db.sync(); //Using this instead of syncing place and user separately creates the joint table UserPlace in the database.
};
