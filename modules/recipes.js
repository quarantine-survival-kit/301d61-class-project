'use strict';

const superagent = require('superagent');
const errorHandler = require('./error');

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
      errorHandler.errorHandler();
    });






















};


