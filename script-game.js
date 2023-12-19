//home button
const backToHomeButton = document.querySelector('.back-to-home-btn');
backToHomeButton.addEventListener('click', function() {
    location.assign('index-home.html');
})

// game board
const fruitCards = document.querySelectorAll('.card');

let matchedCard = 0;
let playerLife = 6;
let hasOpenedCard = false;
let lockOtherCards = false;
let cardOne, cardTwo;

// function to open cards
function openCard(event) {
    if (lockOtherCards) return;

    let selectedCard = event.target;
    selectedCard.classList.add('open');
    if (!hasOpenedCard) {
        hasOpenedCard = true;
        cardOne = selectedCard;
    } else {
        hasOpenedCard = false;
        cardTwo = selectedCard;

        let cardOneImage = cardOne.querySelector('img').src,
        cardTwoImage = cardTwo.querySelector('img').src;
        checkForMatchCards(cardOneImage, cardTwoImage)
    }
};

// function to check if cards are matched
function checkForMatchCards(image1, image2) {
    if (image1 === image2) {
        matchedCard++; //add to the value of matchedCards by 1 when selected cards match
        if (matchedCard === 8) {
            location.assign('index-won.html');
        }
        //prevent cards from getting flipped back
        cardOne.removeEventListener('click', openCard);
        cardTwo.removeEventListener('click', openCard);
    } else {
        //unflip cards
        lockOtherCards = true;

        setTimeout (() => {
            cardOne.classList.remove('open');
            cardTwo.classList.remove('open');
            
            lockOtherCards = false
        }, 800);
        //game-over
        let playerLifeLeft = playerLife--;
        document.querySelector('.player-life').textContent =  playerLifeLeft;
        if (playerLifeLeft === 0) {
            location.assign('index-lose.html');
        }
    }
}

//adding click event to the cards
fruitCards.forEach((fruit) => {
    fruit.addEventListener('click', openCard);
});


// restart button to randomize arrangement of fruits
const shuffleCards = function() {
    fruitCards.forEach((fruit) => {
        let randomFruits = Math.floor(Math.random()* 20);
        fruit.style.order = randomFruits;
        return shuffleCards;
        })
}

const restartButton = document.querySelector('.restart-btn');
restartButton.addEventListener('click', shuffleCards);