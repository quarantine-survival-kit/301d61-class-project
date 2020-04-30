'use strict';

const superagent = require('superagent');
const errorHandler = require('./error');
const db = require('./db');

//constructor function for Movies
function Movie (movie) {
  this.title = movie.title;
  this.overview = movie.overview;
  this.image_url = movie.poster_path !== null ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: 'https://www.auro-3d.com/wp-content/uploads/2016/08/no-poster-available.jpg';
  this.popularity = movie.popularity;
  this.release_date = movie.release_date;
  this.view_link = movie.title ? `https://www.justwatch.com/us/search?q=${movie.title}` : 'No link available.';
}

exports.collectMovieData = function(request, response) {
  const query = request.body.movieSearchInput;
  const key = process.env.MOVIE_API_KEY;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}&limit=10`;

  superagent.get(url)
    .then(movieResponse => {
      console.log('RESPONSE FROM API');
      const data = movieResponse.body.results;
      let movies = [];
      data.map(item => movies.push(new Movie(item)));
      response.render('details', { movies });
    })
    .catch(error => {
      console.log(error);
      errorHandler.errorHandler();
    });
};

exports.addMovieToFavorites = function(request, response) {
  let {title, overview, image_url, popularity, release_date} = request.body;
  let addMovieSQL = 'INSERT INTO movies (title, overview, image_url, popularity, release_date) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  let addMovieValues = [title, overview, image_url, popularity, release_date];
  db.insertToDB(request, response, addMovieSQL, addMovieValues);
};



