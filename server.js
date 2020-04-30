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


// Creates express instance and EJS setup
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(cookieParser());


app.get('/', (request, response) => {
  response.render('homePage');
});
app.get('/aboutUs', (request, response) => {
  response.render('aboutUs');
});

app.get('/home', (request, response) => {
  response.render('index');
});

app.get('/favorites', (request, response) => {
  response.render('favorites');
});


app.post('/recipeSearch', recipe.getRecipes);

app.post('/movieSearch', movie.collectMovieData);
app.post('/saveRecipe', recipe.saveRecipe);
app.post('/bookSearch', book.callBooksAPI);
app.post('/saveBook', book.addBookToDB);
app.post('/movies', movie.addMovieToFavorites);

// app.post('/', user.createUser);
// app.post('/:password', user.findUser);

app.post('/getUsername', (request, response)=> {
  let username = request.body.username;
  response.cookie('username', username).redirect('home');
});




// Start server listening for requests
app.listen( PORT, (request, response) => {
  log(chalk.cyanBright.bold.underline('Server is listening on PORT ' + PORT));
});
