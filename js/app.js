'use strict';

var counter = 0;
var nameOfUser = 'noNameProvided';

function guessingGame(form) {
  if (form.userResponse.value === form.answer.value) {
    counter += 1;
    let points = 'You have ' + counter + ' point(s).'
    alert('You got it right! ' + points)
  } else {
    let points = 'You have ' + counter + ' point(s).'
    alert('Sorry! Try again. ' + points)
  }
  console.log('The user answered: ' + form.userResponse.value)
}

window.onload = function() {
  nameOfUser = prompt( 'Welcome to my page. Please tell me your name:')
  alert('Hi ' + nameOfUser + '! Please answer some questions to play my game.')
}
