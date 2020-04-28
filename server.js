'use strict'

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

// Constructor function used to generate books based on API results
function Book(item) {
  this.title = item.volumeInfo.title ? item.volumeInfo.title : 'No title information available';
  this.author = item.volumeInfo.authors ? item.volumeInfo.authors[0] : 'No author information available';
  this.synopsis = item.volumeInfo.description ? item.volumeInfo.description : item.searchInfo.textSnippet
  this.img_url = item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : 'https://i.imgur.com/J5LVHEL.jpg';
  this.genre = item.volumeInfo.categories ? item.volumeInfo.categories : 'No genre info available';
  this.retail_link = item.volumeInfo.title ? `https://www.amazon.com/s/k=${item.volumeInfo.title}` : 'No retail link available.';
}

//Function to call Google Books API and return results
function callBookAPI (request, response) {
  let {search} = request.body;
  const bookUrl = `https://www.googleapis.com/books/v1/volumes?q=${search}`;

  superagent.get(bookUrl)
    .then( bookQuery => {
      let data = bookQuery.body.items;
      return data.map( item => new Book(item))
    })
    .then ( queryResults => {
      response.render('./index', {queryResults})
    })
    .catch( error => errorHandler('Problem with API', request, response))
}

// Function to handle all errors and render a new error page
function errorHandler(error, request, response) {
  log(chalk.redBright(error));
  response.render('error');
}

// CRUD routes
// app.get('/error', errorHandler);
app.post('/search', callBookAPI);
app.get('/test', (request, response) => {
  response.render('search')
});

// Start server listening for requests
app.listen( PORT, () => {
  const today = new Date();
  let dd = today.getDate();
  if(dd < 10) dd = "0" + dd;
  let mm = today.getMonth() + 1;
  if(mm < 10) mm = "0" + mm;
  const yyyy = today.getFullYear();
  let hh = today.getHours();
  if(hh < 10) hh = "0" + hh;
  let ii = today.getMinutes();
  if(ii < 10) ii = "0" + ii;
  let ss = today.getSeconds();
  if(ss < 10) ss = "0" + ss;
  log(chalk.green("[nodemon]", `${yyyy}-${mm}-${dd} ${hh}:${ii}:${ss}`));
  log(chalk.cyanBright.bold.underline('Server is running on PORT ' + PORT));
})

