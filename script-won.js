const backToHomeButton = document.querySelector('.back-to-home-btn');
const playAgainButton = document.querySelector('.play-again-btn');

//function for Back to Home Button
backToHomeButton.addEventListener('click', function() {
    location.assign('index-home.html');
});


//function for Play Again Button
playAgainButton.addEventListener('click', function() {
    location.assign('index-game.html');
})