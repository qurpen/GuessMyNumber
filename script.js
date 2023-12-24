'use strict';

let secretNum = Math.trunc(Math.random() * 21);
let userInp;
let score;
let highscore;
let scores = [];


function getHighscore(arr){
  let sortedArr = [...arr].sort((a,b) => a-b)
  let highest = sortedArr[sortedArr.length - 1];
  return highest
}

function checkBtnClicked() {
  userInp = document.querySelector('.guess').value;
  score = document.querySelector('.score').textContent;

  //console.log(`${secretNum} is the secret number `);
  //console.log(`${score} is your score`);

  if(userInp == secretNum){
    document.querySelector('.number').textContent = secretNum
    document.querySelector('.message').textContent = 'Congrats! 👏🙌'
    scores.push(score)
  }else{
    userInp > secretNum ?  document.querySelector('.message').textContent = 'Lower' : document.querySelector('.message').textContent = 'Higher'
    score--;
    document.querySelector('.score').textContent = score
  }
  console.log(scores);
}

function againBtnClicked(){
  highscore = getHighscore(scores);

  document.querySelector('.highscore').textContent = highscore
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
  document.querySelector('.message').textContent = 'Start guessing...'

  secretNum = Math.trunc(Math.random() * 21);
  score = 20

  document.querySelector('.score').textContent = score
}

document.querySelector('.check').addEventListener('click', checkBtnClicked)
document.querySelector('.again').addEventListener('click', againBtnClicked)

