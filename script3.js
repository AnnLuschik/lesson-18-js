let listOfLi = document.querySelectorAll('li');

let timerId = setInterval(() => {
    let randomLi = Math.floor(Math.random() * listOfLi.length) + 0;
    for(let li of listOfLi) {
        if(li.style.color === 'red') li.style.color = 'black';
    } 
    listOfLi[randomLi].style.color = 'red';
 }, 1000);