'use strict';

const chalk = require('chalk');
const log = console.log;
/*--------------------
Chalk style guides:
Documentation at https://github.com/chalk/chalk#readme
Errors will be chalk.redBright
Positive results will be chalk.blueBright
Server listening/database connection will be chalk.cyanBright.bold.underline
Data will be chalk.magentaBright
--------------------*/

// Installed dependencies and libraries
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;
const app = express();
const recipe = require('./modules/recipes');
const book = require('./modules/books');
const movie = require('./modules/movies');
var cookieParser = require('cookie-parser');
const favorites = require('./modules/favorites');
const superagent = require('superagent');
const errorHandler = require('./modules/error');

// Creates express instance and EJS setup
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use(cookieParser());

// Redirecrt to / if no username
app.use(function (req, res, next) {
  if (req.url !== '/' && req.url !== '/getUsername') {
    if (!req.cookies.username) {
      return res.redirect('/');
    }
  }
  next();
});

app.get('/', (request, response) => {
  response.render('homePage', { username: request.cookies.username});
});
app.get('/aboutUs', (request, response) => {
  response.render('aboutUs');
});

app.get('/home', (request, response) => {
  const url = 'https://joke3.p.rapidapi.com/v1/joke';
  superagent.get(url)
    .set({ 'x-rapidapi-host': 'joke3.p.rapidapi.com', 'x-rapidapi-key': '4b2d450862msha820ae29636b083p19f7d9jsnd51b7b971fd1'})
    .then(jokeResponse => {
      const data = JSON.parse(jokeResponse.text).content;
      response.render('index', { joke: data});
    })
    .catch(error => {
      console.log(error);
      errorHandler.errorHandler();
    });
});

app.get('/favorites', (request, response) => {
  response.render('favorites');
});

app.post('/recipeSearch', recipe.getRecipes);
app.post('/movieSearch', movie.collectMovieData);
app.post('/saveRecipe', recipe.saveRecipe);
app.post('/deleteRecipe', recipe.deleteRecipe);
app.post('/bookSearch', book.callBooksAPI);
app.post('/saveBook', book.addBookToDB);
app.post('/deleteBook', book.deleteBook);
app.post('/movies', movie.addMovieToFavorites);
app.post('/deleteMovie', movie.deleteMovie);
app.post('/getUsername', (request, response) => {
  let username = request.body.username;
  response.cookie('username', username).redirect('home');
});
app.post('/showFavRecipes', favorites.getFavoritesRecipes);
app.post('/showFavMovies', favorites.getFavoritesMovies);
app.post('/showFavBooks', favorites.getFavoritesBooks);
app.post('/clearCookie', (request, response) => {
  response.clearCookie('username');
  console.log(request.cookie);
  response.redirect('/');
});

// Start server listening for requests
app.listen(PORT, (request, response) => {
  log(chalk.cyanBright.bold.underline('Server is listening on PORT ' + PORT));
});
