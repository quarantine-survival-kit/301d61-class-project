'use strict';



function signInToggle() {
  $('#coinSlot').on('click', function() {
    $('#coinSlot').toggle('slow');
    $('.loginInfo').toggle('slow');

  });

}

signInToggle();

function toggleAboutUsPaul() {
  $('.person.paul img').on('click', function() {
    $('.paul #aboutUsInfo').toggle('slow');

  });

}

toggleAboutUsPaul();

function toggleAboutUsOlga() {
  $('.person.olga img').on('click', function() {
    $('.olga #aboutUsInfo').toggle('slow');

  });

}

toggleAboutUsOlga();

function toggleAboutUsKent() {
  $('.person.kent img').on('click', function() {
    $('.kent #aboutUsInfo').toggle('slow');

  });

}

toggleAboutUsKent();

function toggleAboutUsJoe() {
  $('.person.joe img').on('click', function() {
    $('.joe #aboutUsInfo').toggle('slow');

  });

}

toggleAboutUsJoe();

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


