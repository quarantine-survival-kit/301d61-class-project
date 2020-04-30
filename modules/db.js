'use strict';

const chalk = require('chalk');
const log = console.log;
const pg = require('pg');
const dbClient = new pg.Client(process.env.DATABASE_URL);
const errorHandler = require('./error');

dbClient.connect( error => {
  if (error) {
    console.error(chalk.redBright('Database connection: Failed'), error.stack);
  } else {
    log(chalk.cyanBright.bold.underline('Database connection: Success'));
  }
});

exports.insertToDB = function (request, response, sqlQuery, sqlValues) {
  dbClient.query(sqlQuery, sqlValues)
    .then(data => {
      response.sendStatus(200);
    })
    .catch(error => {
      console.log(error);
      errorHandler.errorHandler(error, request, response);
    });
};

exports.insertUserToDB = function (request, response, sqlQuery, sqlValues) {
  dbClient.query(sqlQuery, sqlValues)
    .then(user => {
      response.render('index', {user: user.rows[0]});

    })
    .catch(error => {
      console.log(error);
      errorHandler.errorHandler(error, request, response);
    });
};

exports.getUserFromDB = function (request, response, sqlQuery, sqlValues ) {
  dbClient.query(sqlQuery, sqlValues)
    .then( user => {
      response.render('index', {user: user.rows[0]});

    })
    .catch(error => errorHandler.errorHandler(error, request, response));
};



