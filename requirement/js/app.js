'use strict';

var score = 0;
var nameOfUser = 'Friend';
// question | possibleAnswers | TriesAllowed | Warm or Cold
var q1 = ['Do I speak Spanish?',
        ['yes'], 1, false];
var q2 = ['What is the name of my first born?: Liana, Ariana or Alana',
        ['Liana'], 2, false ];
var q3 = ['What is one of my favority colors?',
        ['Green','Blue','Red'], 4, true];
var q4 = ['What year was I born?',
          [1984], 6, true];
var q5 = ['What is my gender?',
          ['Male'],1, false];
var q6 = ['What is my favority type of icecream?',
        ['strawberry','cherry','berry'], 4, false];
var q7 = ['What number am I thinking about right now?',
          [7], 6, true];

var questions = [q1,q2,q3,q4,q5,q6,q7];
// In game varibles
var response = '';
// we will store indexes of visited questions here
var visitedQuestions = [-1];

var welcome = 'Welcome to my page. Please tell me your name:';
var getName = prompt(welcome);
nameOfUser = getName ? getName : nameOfUser;
alert('Hi ' + nameOfUser + '! Please answer some questions to play my game.');

var isGameOver = questions.length < score || score < -questions.length || response === 'quit';

while(!isGameOver){

  // Create a random number between min and max that has not been visited yet
  var randomNumber  = -1;
  while(visitedQuestions.includes(randomNumber) || !visitedQuestions.length > questions.length) {
    var max = questions.length + 1;
    var min = 0;
    randomNumber = Math.floor(Math.random() * (max - min)) + min;
  }
  var question = questions[randomNumber][0];
  var possibleAnswers = questions[randomNumber][1];
  var allowedTries = questions[randomNumber][2];
  var hintWarmCold = questions[randomNumber][3];
  var firstAnswer = possibleAnswers[0];
  var typeOfAnswer = typeof(firstAnswer);

  // Ask user question:
  var currentTries = 0;
  while (allowedTries > currentTries){
    response = prompt(question);
    if(possibleAnswers.includes(response)) {
      score += 1;
      var points1 = 'You have ' + score + ' point(s).';
      alert(nameOfUser + '! You got it right! ' + points1);
      break;
    }
    // We will provide some hints
    if (hintWarmCold) {
      var warmCold = response.localeCompare(firstAnswer,'kn', {numeric : 'true'});
      var keepTrying = ' Dont give up!';
      if (typeOfAnswer === typeof('abc')) {
        alert('You are getting ' + (warmCold ? 'warmer.' : 'colder.') + keepTrying);
      } else if (typeOfAnswer === typeof(123)) {
        alert('You value is ' + (warmCold ? 'higher' : 'lower') + ' than the answer.' + keepTrying);
      }
    }

    currentTries += 1;
    score += -1;
    var points2 = ' You have ' + score + ' point(s).';
    var triesReport = currentTries + '/' + allowedTries + ' tries.';
    alert('Please Try again. ' + triesReport + points2);
  } // question loop
  console.log(nameOfUser + ' answered: ' + response);
  response = prompt('Press OK for next question or sumbit the word \'quit\' to stop the game');
} // Game Loop
alert('Thank you for playing ' + nameOfUser + '! Final score: ' + score);
