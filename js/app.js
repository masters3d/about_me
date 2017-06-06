'use strict';
var userPoints = 0;

console.log('hello world!');

alert('Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('Hi ' + user + '! I am so glad you decided to come to my site.');

var answer = prompt('Is Stephanie\'s favorite food popcorn.', 'type yes or no').toLowerCase();
console.log(answer);

//check if the user's answer is correct
// what is correct?
// check what's the answer?
// toLowerCase
// list our cases!
  // yes or y
  // no or n  OR some other answer besides yes or no
// could also handle this using a confirm box
if (answer === 'yes' || answer === 'y') {
  // if it's correct, give them a point
  userPoints++;
} else {
  // if it's not correct, tell them to try again
  alert('Wrong! try again');
}

alert('you have ' + userPoints + ' points.');
