'use strict';

var counter = 0;
var nameOfUser = 'noNameProvided';

// This function is going to be called from HTML
function guessingGame(form) { // eslint-disable-line no-unused-vars
  if (form.userResponse.value === form.answer.value) {
    counter += 1;
    var points1 = 'You have ' + counter + ' point(s).';

    alert('You got it right! ' + points1);
  } else {
    counter += -1;
    var points2 = 'You have ' + counter + ' point(s).';
    alert('Sorry! Try again. ' + points2);
  }
  console.log('The user answered: ' + form.userResponse.value);
}

window.onload = function() {
  nameOfUser = prompt( 'Welcome to my page. Please tell me your name:');
  alert('Hi ' + nameOfUser + '! Please answer some questions to play my game.');
};
