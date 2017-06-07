'use strict';

var score = 0;
var nameOfUser = 'Friend';
var q1 = ['Do I speak Spanish?', 'Yes', 'No', 'Other'];
var q2 = ['What is the name of my first born?','Liana','Ariana','Alana' ];
var q3 = ['What is my favority color?', 'Green','Blue','Red'];
var q4 = ['What year was I born?', '1984', '1980', '1990'];
var q5 = ['What is my gender?', 'Male','Female', 'Other'];
var q6 = ['What is my favority type of icecream?', 'Strawberry','Cherry','Berry'];
var q7 = ['What number am I thinking about right now?', 7, ]

console.log('1'.localeCompare('2','kn', {numeric : 'true'})); // -1
console.log('a'.localeCompare('b','kn', {numeric : 'true'})); // -1
var questions = [q1,q2,q3,q4,q5,q6];
// In game varibles
var response = '';
// we will store indexes of visited questions here
var visitedQuestions = [-1];

var welcome = 'Welcome to my page. Please tell me your name:';
var getName = prompt(welcome);
nameOfUser = getName ? getName : nameOfUser;
alert('Hi ' + nameOfUser + '! Please answer some questions to play my game.');

while(!(questions.length > score || score < -questions.length || response === 'quit')) {

  // Create a random number between min and max that has not been visited yet
  var randomNumber  = -1;
  while(visitedQuestions.contains(randomNumber) || !visitedQuestions.length > questions.length) {
    var max = questions.length + 1;
    var min = 0;
    randomNumber = Math.floor(Math.random() * (max - min)) + min;
  }
  var toAsk = questions[randomNumber][0];
  var possibleAnswers = questions[randomNumber][1];

  // Ask user question:
  response = prompt(toAsk[1])


}


// This function is going to be called from HTML
function guessingGame(form) { // eslint-disable-line no-unused-vars
  if (form.userResponse.value === form.answer.value) {
    score += 1;
    var points1 = 'You have ' + score + ' point(s).';

    alert('You got it right! ' + points1);
  } else {
    score += -1;
    var points2 = 'You have ' + score + ' point(s).';
    alert('Sorry! Try again. ' + points2);
  }
  console.log(nameOfUser + ' answered: ' + form.userResponse.value);

  if (isGameOver()){
    alert('Thank you for playing ' + nameOfUser + '! Final score: ' + score);
  }
}
