'use strict';


// selecting elements

const scorePlayer1El = document.getElementById('score--0');
const scorePlayer2El = document.getElementById('score--1');
const diceImgEl = document.querySelector('.dice');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
const btnNewEl = document.querySelector('.btn--new');


// document.querySelector('.dice').style.display = 'none';


// starting conditions

scorePlayer1El.textContent = 0;
scorePlayer2El.textContent = 0;

document.querySelector('.dice').classList.add('hidden');

let currentScore = 0;
document.querySelector('#current--0').textContent = currentScore;

let activePlayer = 0;

let scores = [0, 0];

const switchPlayer = function () {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    document.querySelector(`.player--0`).classList.toggle('player--active');
    document.querySelector(`.player--1`).classList.toggle('player--active');
};

let isPlaying = true;



// dice functionality




btnRollEl.addEventListener('click', function () {
    if (isPlaying) {
        const randomDiceNum = Math.trunc(Math.random() * 6) + 1
        diceImgEl.classList.remove('hidden');
        diceImgEl.src = `dice-${randomDiceNum}.png`;

        console.log(randomDiceNum, typeof randomDiceNum);

        if (randomDiceNum !== 1) {
            currentScore = currentScore + randomDiceNum;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

        } else {
            console.log('changing players now');
            switchPlayer();
        }
    }
})


btnHoldEl.addEventListener('click', function () {

    if (isPlaying) {

        scores[activePlayer] = scores[activePlayer] + currentScore;

        if (scores[activePlayer] >= 50) {
            isPlaying = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            diceImgEl.classList.add('hidden');

        }
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        switchPlayer();
    }
})


btnNewEl.addEventListener('click', function () {
    document.querySelector('.dice').classList.add('hidden');
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    scorePlayer1El.textContent = 0;
    scorePlayer2El.textContent = 0;
    activePlayer = 0;
    scores = [0, 0];
    isPlaying = true;

})



/* 

when the number is 1 

1- the player score be 0 

2 - change active player

3- the other player starts to count 

4- if score >= 100 is playing turns to false and one is winning 

when click the new game button 

every thing should restart

1- winner class removed 

2-  reset scores to 0 

*/