'use strict';

var score = 0;
var nameOfUser = 'Friend';
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

var questions = [q1,q2,q3,q4,q5,q6,q7];
// In game varibles
var response = '';
// we will store indexes of visited questions here
var visitedQuestions = [-1];

var welcome = 'Welcome to my page. Please tell me your name:';
var getName = prompt(welcome);
nameOfUser = getName ? getName : nameOfUser;
alert('Hi ' + nameOfUser + '! Please answer some questions to play my game.');

while(!(questions.length < score || score < -questions.length || response === 'quit')){
  if (visitedQuestions.length > questions.length) { break; }
  console.log('user response is: ' + response);
  // Create a random number between min and max that has not been visited yet
  var randomNumber  = -1;
  while(visitedQuestions.includes(randomNumber)) {
    if (visitedQuestions.length > questions.length) { break; }
    randomNumber = randomGenerator(questions.length);
    console.log('random: ' + randomNumber);
  }

  function randomGenerator(max) {
    return Math.floor(Math.random() * max);
  }

  visitedQuestions.push(randomNumber);
  console.log('visited questions: ' + visitedQuestions);
  console.log('random item selected from list: ' + randomNumber);

  function questionLogic () {
    var question = questions[randomNumber][0];
    var possibleAnswers = questions[randomNumber][1];
    var allowedTries = questions[randomNumber][2];
    var hintWarmCold = questions[randomNumber][3];
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
  } // end of function

  questionLogic();

  if (response === 'quit') { break; }
  quitInfommercial();

  function quitInfommercial () {
    console.log(nameOfUser + ' answered: ' + response);
    var questionLeftStatus = visitedQuestions.length - 1 + '/' + questions.length + ' Question(s).';
    response = prompt('Press OK for next question or to stop enter \'quit\' at any question prompt during the game. ' + questionLeftStatus);
  }
} // Game Loop
alert('Thank you for playing ' + nameOfUser + '! Final score: ' + score);
