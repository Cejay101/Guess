'use strict';
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent='fuck you'
// console.log(document.querySelector('.guess').value =13)

let randomNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore =0;
const message =function(text){
  document.querySelector('.message').textContent = text
}


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //No number is inputed
  if (!guess) {
    message(`🇩🇪 No number selected`);
  

    //correct number is inputed
  } else if (guess === randomNum) {
    message('correct 💃');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '300px';
 
    // randomNum = Math.trunc(Math.random() * 20 + 1);
    if (score>highscore){
      highscore=score
      document.querySelector('.highscore').textContent=highscore;}

    //number is greater than the correct number
  
  } 
  else if (guess !== randomNum){
    if (score > 1) {
      message(guess > randomNum ? 'Too High':'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message(`You have lost 🤭`);
      document.querySelector('.score').textContent = 0;
    }
  }

});
// const randomNum = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  randomNum = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.number').textContent='?'
  document.querySelector('.number').style.width = '150px';
  document.querySelector('.guess').value= '';
 message('start guesing');
  document.querySelector('.score').textContent=score
  document.querySelector('body').style.backgroundColor='#222'
  
})