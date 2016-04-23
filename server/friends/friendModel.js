var Sequelize = require('sequelize');
var Sequelize = require('sequelize');
var db = require(__dirname + '/../db/db.js');

var Friend = db.define('Friend',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    googleUserId: {
      type: Sequelize.STRING,
      field: 'google_user_id'
    },
    googleFriendId: {
      type: Sequelize.STRING,
      field: 'googleFriendId'
    },
    name: {
      type: Sequelize.STRING,
      field: 'name' 
    },
    url: {
      type: Sequelize.STRING,
      field: 'url'
    },
    image: {
      type: Sequelize.STRING,
      field: 'image'
    }
  }, 
  {
    freezeTableName: true
  }
);


module.exports = Friend;

