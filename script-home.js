const startGameButton = document.querySelector('.start-game-btn');
const howToPlayButton = document.querySelector('.how-to-play-btn');

//function for Start Game Button
startGameButton.addEventListener('click', function() {
    location.assign('index-game.html');
});


//function for How to Play Button
howToPlayButton.addEventListener('click', function() {
    location.assign('index-instructions.html');
})