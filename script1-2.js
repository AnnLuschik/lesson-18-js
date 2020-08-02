let name = prompt('Ваше имя?');
let surname = prompt('Ваша фамилия?');
let age = prompt('Ваш возраст?');
let mood = prompt('Как настроение?');

let userData = {
    name,
    surname,
    age,
    mood
}

let div = document.createElement('div');
div.className = 'container';

let p;

for(let key in userData) {
    p = document.createElement('p');
    p.className = 'block';
    p.append(key + ': ' + userData[key]);
    div.append(p);
}

document.body.append(div);

let allTags = {};

allTags.div = document.querySelectorAll('div').length;
allTags.p = document.querySelectorAll('p').length;
allTags.classes = [div.className, p.className];

console.log(allTags);