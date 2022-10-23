'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; //  => +1 because without we could never reach 20, max would be 19.9999
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // no input && 0 input
  if (!guess) {
    displayMessage('No Number! o(TヘTo)');
  }

  //when user win
  else if (guess === secretNumber) {
    displayMessage('Correct Number! (☞ﾟヮﾟ)☞');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Too high! ( ͡~ ͜ʖ ͡°)' : 'Too low! ( ͡° ͜ʖ ͡~)'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost ╯︿╰');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//reset
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
