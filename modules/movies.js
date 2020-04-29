'use strict';

const superagent = require('superagent');
const errorHandler = require('./error');

//constructor function for Movies
function Movie (movie) {
  this.title = movie.title;
  this.overview = movie.overview;
  this.image_url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  this.popularity = movie.popularity;
  this.release_date = movie.release_date;
}

exports.collectMovieData = function(request, response) {
  const query = request.body.movieSearchInput;
  const key = process.env.MOVIE_API_KEY;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`;

  superagent.get(url)
    .then(movieResponse => {
      console.log('RESPONSE FROM API');
      const data = movieResponse.body.results;
      let movies = [];
      data.map(item => movies.push(new Movie(item)));
      response.render('details', { movies });
    })
    .catch(error => errorHandler(error, request, response));
};