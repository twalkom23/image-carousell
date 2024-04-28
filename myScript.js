const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const dots = document.querySelector('.dots');
let timer = 5000;
let intervalId;

let index = 0;
let images = [];
let sliderArray = [];

let imageContainer = document.querySelector('.image');


//adds all the images to a list to cycle through
imageContainer.childNodes.forEach(child => {
    if (child.tagName === 'IMG') {
    images.push(child);
    }
})

dots.childNodes.forEach(child => {
    if (child.tagName === 'BUTTON') {
        sliderArray.push(child);
    }
})



function displayDots(index) {
    sliderArray.forEach(element => {
        if (element.id === 'filled') {
            element.removeAttribute('id');
        }
        sliderArray[index].setAttribute('id', 'filled')
    });
}

function loadPage(index) {
    displayImages(index);
    displayDots(index);
}

function displayImages (index) {
    images.forEach(element => {
        if  (element.id === 'visible') {
            element.removeAttribute('id');
        }
        images[index].setAttribute('id', 'visible');
    })
}
function pressDots () {
    btn1.addEventListener('click', () => {
        index = 0;
        displayImages(index);
        displayDots(index);
        clearInterval(intervalId);
        startTimer();
    })
    btn2.addEventListener('click', () => {
        index = 1;
        displayImages(index);
        displayDots(index);
        clearInterval(intervalId);
        startTimer();
    })
    btn3.addEventListener('click', () => {
        index = 2;
        displayImages(index);
        displayDots(index);
        clearInterval(intervalId);
        startTimer();
    })
    
    
}
function pressNext () {
    next.addEventListener('click', () => {
        index ++;
        if (index >= images.length) {
            index = 0;
        }
        displayImages(index);
        displayDots(index);
        clearInterval(intervalId);
        startTimer();
        
    });
}
function pressPrev () {
    prev.addEventListener('click', () => {
        index --;
        if (index < 0 ){
            index = (images.length - 1)
        }
        displayImages(index);
        displayDots(index);
        clearInterval(intervalId);
        startTimer();
    });
    
}
function automaticSlide () {
    index ++;
    if (index >= images.length) {
        index = 0;
    }
    displayImages(index);
    displayDots(index);
}

function startTimer() {
    intervalId = setInterval(automaticSlide, timer);
}





//start the program 
loadPage(index);
pressDots();
pressNext();
pressPrev();
startTimer();














