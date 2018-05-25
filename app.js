// first game coding !
// I create a init() function for DRY.(Dont Repeat yourself !)
 //somewhere i used ES6 arrow function for good practice
 // Read game rules in README.
'use strict';
var score, activePlayer, roundScore, gamePlaying;
 init(); 
document.querySelector('.btn-roll').addEventListener('click', () => {
    if(gamePlaying){
         // 1. dice png according to random number
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    // 2. update scores
    if(dice !== 1){
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
       nextplayer();
        
    }
}
});

document.querySelector('.btn-hold').addEventListener('click', () => {
   if(gamePlaying){
    //Add score
    score[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    //console.log(roundScore);
    if(score[activePlayer] >= 100) {
        console.log('Winner is ' + activePlayer);
        document.querySelector('#name-' + activePlayer).textContent= 'WINNER !';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        //document.querySelector('.btn-roll').style.display= 'none';//..
       // document.querySelector('.btn-hold').style.display= 'none'; //..
       gamePlaying = false;
    } else {
        nextplayer();        
    }

   }
})

function nextplayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click', init) //..

function init(){
    gamePlaying = true;
    score = [0,0];
    activePlayer = 0;
    roundScore = 0;
    var name1 = prompt('please enter player1 name? ');
    var name2 = prompt('please enter player2 name? ');
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('name-0').innerHTML = name1;
    document.getElementById('name-1').innerHTML = name2;
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    //console.log(activePlayer);
}