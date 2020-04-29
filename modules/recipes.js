'use strict';

const superagent = require('superagent');
const errorHandler = require('./error');
const db = require('./db');
// const pg = require('pg');
// const dbClient = new pg.Client(process.env.DATABASE_URL);

function Recipe(data) {
  this.title = data.label;
  this.ingredients = data.ingredientLines;
  this.calories = data.calories;
  this.steps = data.url;
  this.image_url = data.image;
  this.healthLabels = data.healthLabels;
}

exports.getRecipes = function(request, response) {
  const searchInput = request.body.recipeSearchInput;
  const api_key = process.env.RECIPE_API_KEY;
  const api_id = process.env.RECIPE_API_ID;
  const api_url = `https://api.edamam.com/search?q=${searchInput}&app_id=${api_id}&app_key=${api_key}`;
  superagent.get(api_url)
    .then(recipesResponse => {
      console.log('RESPONSE FROM API');
      const data = recipesResponse.body.hits;
      let recipes = [];
      data.map(item => recipes.push(new Recipe(item.recipe)));
      response.render('details', { recipes });
    })
    .catch(error => {
      console.log(error);
      errorHandler.errorHandler(error, request, response);
    });
};

exports.saveRecipe = function(request, response) {
  const { title, ingredients, calories, steps, image_url, healthLabels } = request.body;
  let addRecipeSQL = 'INSERT INTO recipes (title, ingredients, calories, steps, image_url, healthLabels) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  let addRecipeValues = [title, ingredients, calories, steps, image_url, healthLabels];
  db.insertToDB(request, response, addRecipeSQL, addRecipeValues);
};









