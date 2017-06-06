'use strict';

var counter = 0;

function guessingGame(form) {
  if (form.userResponse.value === form.answer.value) {
    counter += 1;
    let points = 'You have ' + counter + ' point(s).'
    alert('You got it right! ' + points)
  } else {
    let points = 'You have ' + counter + ' point(s).'
    alert('Sorry! Try again. ' + points)
  }
}
