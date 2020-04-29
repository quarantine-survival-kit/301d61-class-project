'use strict';

const chalk = require('chalk');
const pg = require('pg');
const errorHandler = require('./error');
const dbClient = new pg.Client(process.env.DATABASE_URL);

dbClient.connect( error => {
  if (error) {
    console.error(chalk.redBright('Database connection: Failed'), error.stack)
  } else {
    console.log(chalk.cyanBright.bold.underline('Database connection: Success'))
  }
})

exports.addMovieToFavorites = function(request, response) {
  let {title, overview, image_url, popularity, release_date} = request.body;
  let sql = 'INSERT INTO movies (title, overview, image_url, popularity, release_date) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  let safeValues = [title, overview, image_url, popularity, release_date];
  console.log(safeValues);
  dbClient.query(sql, safeValues)
    .then(data => {
      console.log('save movie to db');
      response.send(200);
    })
    .catch(error => {
      console.log(error);
      errorHandler.errorHandler();
    });
}

