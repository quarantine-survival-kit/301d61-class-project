'use strict'

const chalk = require('chalk');
const superagent = require('superagent');
const errorHandler = require('./error');
const db = require('./db');


// Constructor function used to generate books based on API results
function Book(item) {
  this.title = item.volumeInfo.title ? item.volumeInfo.title : 'No title information available';
  this.author = item.volumeInfo.authors ? item.volumeInfo.authors[0] : 'No author information available';
  this.synopsis = item.volumeInfo.description ? item.volumeInfo.description : 'No description available'
  this.img_url = item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : 'https://i.imgur.com/J5LVHEL.jpg';
  this.genre = item.volumeInfo.categories ? item.volumeInfo.categories : 'No genre info available';
  this.retail_link = item.volumeInfo.title ? `https://www.amazon.com/s/k=${item.volumeInfo.title}` : 'No retail link available.';
}

//Function to call Google Books API and return results
exports.callBooksAPI = function(request, response) {
  let {book_search_input} = request.body;
  const bookUrl = `https://www.googleapis.com/books/v1/volumes?q=${book_search_input}`;

  superagent.get(bookUrl)
    .then( bookQuery => {
      let data = bookQuery.body.items;
      return data.map( item => new Book(item))
    })
    .then ( queryResults => {
      response.render('./details', {queryResults})
    })
    .catch(error => {
      console.log(error);
      errorHandler.errorHandler();
    });
};

// This function will save a selected book from the search list to the database and render that single book into favorites.ejs
exports.addBookToDB = function(request, response){
  let {title, author, synopsis, img_url, genre, retail_link} = request.body;
  let addBook = `INSERT INTO books (title, username, author, synopsis, img_url, genre, retail_link) 
                 VALUES ($1, $2, $3, $4, $5, $6, $7) 
                 RETURNING *;`;
  let username = request.cookies.username;
  let addValues = [title, username, author, synopsis, img_url, genre, retail_link];
  db.insertToDB(request, response, addBook, addValues);
};
