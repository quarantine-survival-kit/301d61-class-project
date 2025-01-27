'use strict' ;

const db = require('./db');

exports.createUser = function(request, response) {
  const data = request.body;
  let user = new User(data);
  let insertSQL = 'INSERT INTO users (username, password, image_url, userid) VALUES ($1, $2, $3, $4) RETURNING *;';
  let insertValues = [user.username, user.password, user.image_url, user.userID];
  db.insertUserToDB(request, response, insertSQL, insertValues);
};

exports.findUser = function(request, response) {
  const data = request.body.password;
  let searchSQL = 'SELECT * FROM users WHERE password =$1;';
  let searchValues = [data];
  db.getUserFromDB(request, response, searchSQL, searchValues);
};

function User(data) {
  this.username = data.username;
  this.password = data.password;
  this.image_url = `https://api.adorable.io/avatars/285/${data.userName}@adorable.io.png` ;
  this.userID = data.password + data.userName;
}

