let listOfLi = document.querySelectorAll('li');

let timerId = setInterval(() => {
    let randomLi = Math.floor(1 + Math.random() * listOfLi.length);
    for(let li of listOfLi) {
        if(li.style.color === 'red') li.style.color = 'black';
    } 
    listOfLi[randomLi].style.color = 'red';
 }, 1000);
