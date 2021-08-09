'use strict';

let randomNumber = Math.ceil(Math.random() * 20); // generate random number from 1 to 
let message = "";
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;

document.querySelector('.again').addEventListener('click', () => {
  randomNumber = Math.ceil(Math.random() * 20); // generate random number from 1 to 
  message = "";
  score = 20;
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value = "";
  document.querySelector('.score').textContent = "20";
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess-heading').textContent = "Guess My Number!";
  document.querySelector('.message').textContent = "Start guessing...";
});

document.querySelector('.check').addEventListener('click', () => {
  const userGuess = Number(document.querySelector('.guess').value);

  if (score < 1) {
    document.querySelector('.guess-heading').textContent = "Game Over";
  } else {
    if (userGuess > 0 && userGuess <= 20) {
      if (score === 1) {
        score--;
        document.querySelector('.guess-heading').textContent = "Game Over";
        document.querySelector('.score').textContent = score;
      } else {
        if (userGuess < randomNumber) {
          message = 'Too Low!';
          score--;
        } else if (userGuess > randomNumber) {
          message = 'Too High!';
          score--;
        } else {
          message = 'Correct Number';
          score--;
          if (score > highScore) {
            highScore = score;
          }
          document.querySelector('.number').textContent = userGuess;
          document.querySelector('.highscore').textContent = highScore;
          document.querySelector('body').style.backgroundColor = '#60b347';
        }
        document.querySelector('.message').textContent = message;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = 'Please enter Valid Number';
    }
  }
});