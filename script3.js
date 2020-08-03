let listOfLi = document.querySelectorAll('li');

let randomColor = () => `#${Math.random().toString(16).slice(3,9)}`;

let randomNumber = (length) => Math.floor(Math.random() * length);

const black = '#000000';

let timerFirst = setInterval(() => {
    let randomLi = randomNumber(listOfLi.length);
    listOfLi[randomLi].style.color = randomColor();
 }, 1000);

 clearInterval(timerFirst);

let timerSecond = setInterval(() => {
    let randomLi = randomNumber(listOfLi.length);
    let array = Array.from(listOfLi);
    let result = array.find(item => item.style.color !== '');
    if (result) result.style.color = '';
    array[randomLi].style.color = randomColor();
}, 1000);