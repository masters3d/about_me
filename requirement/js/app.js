'use strict';

// question | possibleAnswers | TriesAllowed | Warm or Cold
var q1 = ['Do I speak Spanish?',
        ['yes'], 1, false];
var q2 = ['What is the name of my first born?: Liana, Ariana or Alana',
        ['liana'], 2, true ];
var q3 = ['What is one of my favority colors?',
        ['green','blue','red'], 4, true];
var q4 = ['What year was I born?',
          ['1984'], 6, true];
var q5 = ['What is my gender? Male or Female' ,
          ['male'],1, false];
var q6 = ['What is my favority type of icecream?',
        ['strawberry','cherry','berry'], 4, true];
var q7 = ['What number am I thinking about right now?',
          ['7'], 6, true];
var q8 = ['Did I gradute in Washington'
          ['yes'], 1, false];
var q9 = ['Am I married?'
          ['yes'], 1, false];
var q10 = ['Do I have sibblings?'
          ['yes'], 1, false];
var q11 = ['Did I graduate from U.W.?'
          ['no'], 1, false];

// VARIABLES
var questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11];
var response = '';
var score = 0;
var nameOfUser = 'Friend'; // Default if none given

var welcome = 'Welcome to my page. Please tell me your name:';
var getName = prompt(welcome);
nameOfUser = getName ? getName : nameOfUser;
alert('Hi ' + nameOfUser + '! Please click on Start Guessing Game to play a questions game about me.');

function guessingGame(){ // eslint-disable-line no-unused-vars
// We will shuffle the array to get different orders
  questions = shuffle(questions);
  showQuitInfo(0);

  for (var i = 0; i < questions.length; i += 1) {
    console.log('user response is: ' + response);
    console.log('visited questions: ' + ( i + 1 ));
    var question = questions[i][0];
    var possibleAnswers = questions[i][1];
    var allowedTries = questions[i][2];
    var hintWarmCold = questions[i][3];
    var firstAnswer = possibleAnswers[0];
    var typeOfAnswer = isNaN(parseInt(firstAnswer)) ? typeof('abc') : typeof(123);

    // Ask user question:
    var currentTries = 0;
    while (allowedTries > currentTries && response !== 'quit'){
      console.log('user response is: ' + response);
      response = prompt(question);
      response = response ? response.toLowerCase() : '';
      if (response === 'quit') { break;}
      if(possibleAnswers.includes(response)) {
        score += 1;
        var points1 = 'You have ' + score + ' point(s).';
        alert(nameOfUser + '! You got it right! ' + points1);
        break;
      }
      // We will provide some hints when answer not found
      if (hintWarmCold) {
        currentTries += 1;
        var comparedResult = response.localeCompare(firstAnswer,'kn', {numeric : 'true'});
        // null should not happend here because we are checking for equal above
        var warmCold = comparedResult === 1 ? true : comparedResult === -1 ? false : null;
        var triesReport1 = currentTries + '/' + allowedTries + ' tries.';
        var keepTrying =  ' ' + triesReport1 + ' Dont give up!';
        if (typeOfAnswer === typeof('abc')) {
          alert('You are getting ' + (warmCold ? 'warmer. ' : 'colder. ') + keepTrying);
        } else if (typeOfAnswer === typeof(123)) {
          alert('You value is ' + (warmCold ? 'higher' : 'lower') + ' than the answer.' + keepTrying);
        }
      } else {
        currentTries += 1;
        score += -1;
        var points2 = ' You have ' + score + ' point(s).';
        var triesReport2 = currentTries + '/' + allowedTries + ' tries.';
        alert('Please keep trying. ' + triesReport2 + points2);
      }
      if (response === 'quit') { break; }
    } // question loop
    console.log(nameOfUser + ' answered: ' + response);
    if (response === 'quit') { break; }
    showQuitInfo(i + 1);
  } // Game Loop
  alert('Thank you for playing ' + nameOfUser + '! Final score: ' + score);
}// end of Game function

function showQuitInfo(questionNumber) {
  var questionLeftStatus = questionNumber + '/' + questions.length + ' Question(s).';
  response = prompt('Press OK for next question or to stop enter \'quit\' at any question prompt during the game. ' + questionLeftStatus);
}

/// HELPER FUNCTIONS:
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
