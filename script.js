'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const desplayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};
const changeNumber = (number) => {
  document.querySelector('.number').textContent = number;
};
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    desplayMessage('No number 💥');
  } else if (guess > 20 || guess < 1) {
    desplayMessage('Please Insert a Number Between 1 - 20');
  }
  // when a player wins
  else if (guess === secretNumber) {
    desplayMessage('Correct Number!!! 🎉');
    changeNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      desplayMessage(guess > secretNumber ? 'Too High  📈 ' : 'Too Low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      desplayMessage('💥💥💥 You Lost the Game 💥💥💥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  changeNumber('?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  desplayMessage('Start Guessing...');
});
