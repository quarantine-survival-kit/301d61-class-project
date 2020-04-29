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
const superagent = require('superagent');
const pg = require('pg');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;
const app = express();
const recipe = require('./modules/recipes');
const book = require('./modules/books');
const movie = require('./modules/movies');


// Creates express instance and EJS setup
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));

// Connected to database client
const dbClient = new pg.Client(process.env.DATABASE_URL);
dbClient.connect( error => {
  if (error) {
    console.error(chalk.redBright('Database connection: Failed'), error.stack)
  } else {
    log(chalk.cyanBright.bold.underline('Database connection: Success'))
  }
})

// CRUD routes
// app.get('/error', errorHandler);
app.get('/', (request, response) => {
  response.render('index');
});

// app.get('/details', (request, response) => {
//   response.render('details');
// });

app.get('/favorites', (request, response) => {
  response.render('favorites');
});

app.post('/recipeSearch', recipe.getRecipes);
app.post('/bookSearch', book.callBooksAPI);
app.post('/movieSearch', movie.collectMovieData);

// Start server listening for requests
app.listen( PORT, (request, response) => {
  log(chalk.cyanBright.bold.underline('Server is listening on PORT ' + PORT));
});