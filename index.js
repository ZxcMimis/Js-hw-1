"use strict";

let age = 14;
console.log(age);

const myName = 'Ruslan';
console.log(myName);

let isStudent = true;
console.log(isStudent);

const myString = 'Талант — це дар, якому неможливо ні навчити, ні навчитися. Іммануїл Кант';
console.log(myString);

let myNumber = 35;
myNumber = myNumber + 10;
console.log(myNumber);

const myNull = null;
console.log(myNull);

const yourName = prompt("Введіть ваше і'мя");
const welcome = alert('Вітаємо ' + yourName + '!');
console.log(yourName);

const confirmation = confirm('Підтвердити?');
if (confirmation === true) {
    alert('Дякую за підтвердження!');
} else {
    alert('Дію відмінено!');
};

alert('Ця дія небезпечна');
const confirmations = confirm('Підтвердити?');
if (confirmations === true) {
    alert('Дякую за підтвердження!');
} else {
    alert('Дію відмінено!');
};