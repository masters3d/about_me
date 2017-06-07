'use strict';

var counter = 0;
var nameOfUser = 'noNameProvided';

function isGameOver(){
  var count = 0;
  var elements  = document.getElementsByTagName('input');
  var formsCount = document.getElementsByTagName('form').length;
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].type == 'radio' && elements[i].checked){
      count += 1;
    }
  }
  return count === formsCount;
}

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
  console.log(nameOfUser + ' answered: ' + form.userResponse.value);

  if (isGameOver()){
    alert('Thankyou for playing ' + nameOfUser + '! Final score: ' + counter);
  }
}

window.onload = function() {
  nameOfUser = prompt( 'Welcome to my page. Please tell me your name:');
  alert('Hi ' + nameOfUser + '! Please answer some questions to play my game.');
};
