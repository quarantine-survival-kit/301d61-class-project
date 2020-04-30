'use strict';



function signInToggle() {
  $('#profilePic').on('click', function() {
    $('#signIn').toggleClass('extended');
    setTimeout( () => {
      $('#userInfo').toggleClass('display');
    }, 150);

  });

}

signInToggle();

function darkModeToggle() {
  $('#darkModeSwitch').on('click', function() {
    $('#switch').toggleClass( 'on');
    setTimeout( () => {
      $('*').toggleClass('dark');
    }, 100);
  });

}

darkModeToggle();


function movieForm() {
  $('#movieImage').on('click', function() {
    $('#movies form').toggle('slow');
    $('#movies h2').toggleClass('form');
    $('#movies svg').toggleClass('form');
  });
}

movieForm();

function bookForm() {
  $('#bookImage').on('click', function() {
    $('#books form').toggle('slow');
    $('#books h2').toggleClass('form');
    $('#books svg').toggleClass('form');
  });
}

bookForm();

function recipeForm() {
  $('#recipeImage').on('click', function() {
    $('#recipes form').toggle('slow');
    $('#recipes h2').toggleClass('form');
    $('#recipes svg').toggleClass('form');
  });
}

recipeForm();


