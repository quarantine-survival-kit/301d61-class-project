'use strict';

const chalk = require('chalk');
const log = console.log;
/*--------------------
Chalk style guides:
Documentation at https://github.com/chalk/chalk#readme
Errors will be chalk.redBright
Positive results will be chalk.blueBright
Server listening will be chalk.yellowBright.bold.underline
Data will be chalk.magentaBright
--------------------*/

// Installed dependencies and libraries
require('dotenv').config();
const express = require('express');
const superagent = require('superagent');
const pg = require('pg');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;
const app = express();

// Creates express instance and EJS setup
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));

//constructor function for Movies
function Movie (movie) {
  this.title = movie.title;
  this.overview = movie.overview;
  this.image_url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  this.popularity = movie.popularity;
  this.release_date = movie.release_date;
}

app.get('/index', collectMovieData);

function collectMovieData (request, response) {
  const query = request.query.search_query;
  const key = process.env.MOVIE_API_KEY;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`;

  superagent.get(url)
    .then(movieResponse => {
      console.log('RESPONSE FROM API');
      const data = movieResponse.body.results;
      console.log(data);
      let movies = [];
      data.map(item => movies.push(new Movie(item)));
      response.render('index', { movies: movies});

    })

    .catch(error => errorHandler(error, request, response));
}

// Connected to database client
// const dbClient = new pg.Client(process.env.DATABASE_URL);
// dbClient.connect( error => {
//   if (error) {
//     console.error(chalk.redBright('Database connection: Failed'), error.stack)
//   } else {
//     log(chalk.greenBright('Database connection: Success'))
//   }
// })

// Function to handle all errors and render a new error page
// function errorHandler(error, request, response) {
//   log(chalk.redBright(error));
//   response.render('error');
// }

// CRUD routes
// app.get('/error', errorHandler);
app.get('/', (request, response) => {
  response.render('index');
});

app.get('/details', (request, response) => {
  response.render('details');
});

// Start server listening for requests
app.listen( PORT, (request, response) => {
  log(chalk.yellowBright.bold.underline('Server is listening on PORT ' + PORT));
});

