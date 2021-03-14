//Game created by Temurbek Ro'ziyev on 07.08.2020


var activePlayer, roundScore, scores, gamePlaying;

newGame();


//Click the btn-roll button and choose random button
document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {
        var dice;

        dice = Math.floor(Math.random() * 6) + 1;

        var diceDOM = document.querySelector('.dice');

        diceDOM.style.display = 'block';
        diceDOM.src = 'assets/dice-' + dice + '.png';

        if (dice !== 1) {
            roundScore += dice;

            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            //Change the active player

            nextPlayer();
        }
    }

});


document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // Add roundScore to activePlayer score
        scores[activePlayer] += roundScore;

        //Write to document
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];


        if (scores[activePlayer] >= 30) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;
        } else nextPlayer();
    }

});

// NEW game

document.querySelector('.btn-new').addEventListener('click', function () {
    newGame();
});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    roundScore = 0;
    document.querySelector('.dice').style.display = 'none';


    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}


function newGame() {
    gamePlaying = true;
    activePlayer = 0;
    roundScore = 0;
    scores = [0, 0];

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.querySelector('.dice').style.display = 'none';


    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    
}



// Game Complete!!!