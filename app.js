// import functions

// reference needed DOM elements
const catImage = document.getElementById('cat-image');
const catSound = document.getElementById('cat-sound');
const dogImage = document.getElementById('dog-image');
const dogSound = document.getElementById('dog-sound');
const horseImage = document.getElementById('horse-image');
const horseSound = document.getElementById('horse-sound');

// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
catImage.addEventListener('click', () => {
    catSound.play();
});

dogImage.addEventListener('click', () => {
    dogSound.play();
});

horseImage.addEventListener('click', () => {
    horseSound.play();
});
