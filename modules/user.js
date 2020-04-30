'use strict' ;
const pg = require('pg');
const errorHandler = require('./error');
const db = require('./db');
currentUser = {};

exports.createUser = function(request, response) {
  const data = request.body;
  let user = new User(data);
  currentUser = user;

  let insertSQL = `INSERT INTO users (username, password, image_url) VALUES ($1, $2, $3) RETURNING *;`;
  
  let insertValues = [user.username, user.password, user.image_url];

  db.insertUserToDB(request, response, insertSQL, insertValues);
};

exports.findUser = function(request, response) {
  const data = request.body.password;
  let searchSQL = `SELECT * FROM users WHERE password =$1;`;

  let searchValues = [data];

  db.getUserFromDB(request, response, searchSQL, searchValues);

};

exports.getUserId = function() {
  return currentUser.userID;
};

function getUser() {
  return currentUser;
};

function User(data) {
  this.username = data.username;
  this.password = data.password;
  this.image_url = `https://api.adorable.io/avatars/285/${data.username}@adorable.io.png` ;
  this.userID = data.username + data.password;
};
