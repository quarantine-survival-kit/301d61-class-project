'use strict' ;
const pg = require('pg');
const errorHandler = require('./error');
const dbClient = new pg.Client(process.env.DATABASE_URL);
dbClient.connect(error => {
  if (error) {
    console.error('This was an Error', error.stack);
  } else {
    console.log('Were connected');
  }
});

exports.createUser = function(request, response) {
  const data = request.body;
  let user = new User(data);

  let insertSQL = `INSERT INTO users (username, password, image_url) VALUES ($1, $2, $3) RETURNING *;`;
  
  let insertValues = [user.username, user.password, user.image_url];

  dbClient.query(insertSQL, insertValues);
  response.render('index', {user});

};

exports.findUser = function(request, response) {
  const data = request.body.password;
  let searchSQL = `SELECT * FROM users WHERE password =$1;`;

  let searchValues = [data];

  dbClient.query(searchSQL, searchValues)
    .then( user => {
      console.log(user.rows);
        response.render('index', {user: user.rows[0]});

    })
    .catch(error => errorHandler.errorHandler(error, request, response));

};


function User(data) {
  this.username = data.userName;
  this.password = data.password;
  this.image_url = `https://api.adorable.io/avatars/285/${data.userName}@adorable.io.png` ;
};
