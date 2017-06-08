'use strict';

var score = 0;
var nameOfUser = 'Friend';

function howManyChecked(form){
  var elements =  form.getElementsByTagName('input');
  var count = 0;
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].type == 'radio' && elements[i].checked){
      count += 1;
    }
  }
  return count;
}

function isGameOver(){
  var formsCount = document.getElementsByTagName('form').length;
  return howManyChecked(document) === formsCount || score <= -formsCount;
}

// This function is going to be called from HTML
function guessingGame(form) { // eslint-disable-line no-unused-vars
  if (form.nodeName !== 'FORM') { throw 'We were expecting a form here' ;}
  var label =  form.getElementsByTagName('label')[0];

  //Break out if the user did not check a box
  if (!howManyChecked(form) > 0) {
    return;
  } else if (howManyChecked(form) === 1 && label.style.color === 'red' || label.style.color === 'green' ) {
    return;
  }
  if (form.userResponse.value === form.answer.value) {
    score += 1;
    label.style.color = 'green';
    var points1 = 'You have ' + score + ' point(s).';
    alert('You got it right! ' + points1);
  } else {
    score += -1;
    label.style.color = 'red';
    var points2 = 'You have ' + score + ' point(s).';
    alert('Sorry! Try again. ' + points2);
  }
  console.log(nameOfUser + ' answered: ' + form.userResponse.value);

  if (isGameOver()){
    alert('Thank you for playing ' + nameOfUser + '! Final score: ' + score);
  }
}

window.onload = function() {
  var welcome = 'Welcome to my page. Please tell me your name:';
  var getName = prompt(welcome);
  nameOfUser = getName ? getName : nameOfUser;
  alert('Hi ' + nameOfUser + '! Please answer some questions to play my game.');
};
