'use strict'

const chalk = require('chalk');
const pg = require('pg');
const dbClient = new pg.Client(process.env.DATABASE_URL);

// This function will save a selected book from the search list to the database and render that single book into favorites.ejs
exports.addBookToDB = function(request, response){
  let {title, author, synopsis, img_url, genre, retail_link} = request.body;

  let addBook = `INSERT INTO books (title, author, synopsis, img_url, genre, retail_link) 
                 VALUES ($1, $2, $3, $4, $5, $6) 
                 RETURNING *;`;
  let addValues = [title, author, synopsis, img_url, genre, retail_link];
  console.log(addValues)
  dbClient.query(addBook, addValues)
    .then( queryData => {
      let faveBook = queryData.rows;
      console.log(chalk.blueBright.underline('pulling from database query'), faveBook)
    })
    .catch(error => {
      console.log(error);
      errorHandler.errorHandler();
    });
}