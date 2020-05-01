'use strict';

const db = require('./db');

exports.getFavoritesRecipes = function(request, response) {
  let username = request.cookies.username;
  let selectQuery = 'SELECT * FROM recipes WHERE username=$1;';
  let selectValues = [username];
  db.getFavoritesRecipesFromDB(request, response, selectQuery, selectValues);
};

exports.getFavoritesMovies = function(request, response) {
  let username = request.cookies.username;
  let selectQuery = 'SELECT * FROM movies WHERE username=$1;';
  let selectValues = [username];
  db.getFavoritesMoviesFromDB(request, response, selectQuery, selectValues);
};

exports.getFavoritesBooks = function(request, response) {
  let username = request.cookies.username;
  let selectQuery = 'SELECT * FROM books WHERE username=$1;';
  let selectValues = [username];
  db.getFavoritesBooksFromDB(request, response, selectQuery, selectValues);
};


