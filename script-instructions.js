const backArrowButton = document.querySelector('.back-arrow-btn');

//function for back arrow button or return home button
backArrowButton.addEventListener('click', function() {
    location.assign('index-home.html');
})