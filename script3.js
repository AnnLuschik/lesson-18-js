let listOfLi = document.querySelectorAll('li');

let timerFirst = setInterval(() => {
    let randomLi = Math.floor(Math.random() * listOfLi.length) + 0;
    listOfLi[randomLi].style.color = `#${Math.random().toString(16).slice(2,8)}`;
 }, 1000);

 clearInterval(timerFirst);

 let timerSecond = setInterval(() => {
    let randomLi = Math.floor(Math.random() * listOfLi.length) + 0;
    for(let li of listOfLi) {
        if (li.style.color != '#000000') li.style.color = '#000000';
    }
    listOfLi[randomLi].style.color = `#${Math.random().toString(16).slice(2,8)}`;
 }, 1000);