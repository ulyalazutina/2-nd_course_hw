//Задание 1
let str = 'Преобразуйте строку js в верхний регистр JS.';
str = str.toUpperCase();
// console.log(str);

//Задание 2
const getArray = (array, stroke) => {

    let newArray = [];
    let regExp = new RegExp(`${stroke}+`, 'gi');

    array.forEach(element => {
        if (regExp.test(element)) {
            newArray.push(element);
        }
    });

    console.log(array);
    console.log(newArray)
}
// getArray(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
// getArray(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
// getArray(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []


//Задание 3
let num = 32.58884;
// console.log('До меньшего целого - ' + Math.floor(num) +
// ' До большего целого - ' + Math.ceil(num) +
// ' До ближайшего целого - ' + Math.round(num));

//Задание 4
let numMin = Math.min(52, 53, 49, 77, 21, 32);
let numMax = Math.max(52, 53, 49, 77, 21, 32);

// console.log(numMin, numMax);

//Задание 5
const getRandom = () => {
    let numRandom = (Math.round(Math.random() * (10 - 1)) + 1);
    console.log(numRandom)
}

// getRandom();

//Задание 6
const getRandomArray = (maxValue) => {
    const a = [];
    length = Math.floor(maxValue / 2);

    for (let i = 0; i < length; i++) {
        a.push(Math.round(Math.random() * maxValue));
    }
    console.log(a);
}

// getRandomArray(7);

//Задание 7
const getRandomNum = (minValue, maxValue) => {
    let numRandom = (Math.round(Math.random() * (maxValue - minValue)) + minValue);
    console.log(numRandom)
}

// getRandomNum(1, 10);

//Задание 8 
let currentDate = new Date();
let anotherFormat = currentDate.toLocaleString();
// console.log(anotherFormat);

//Задание 9
currentDate.setDate(currentDate.getDate() + 73);
let newFormat = currentDate.toLocaleDateString();
// console.log(newFormat);

//Задание 10
const getDate = (userDate) => {

    let myDate = new Date(`${userDate}`);

    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    let hours = myDate.getHours();
    let minutes = myDate.getMinutes();
    let second = myDate.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (second < 10) {
        second = "0" + second;
    }

    let date = `Дата: ${myDate.getDate()} ${month[myDate.getMonth()]} ${myDate.getFullYear()} - это ${days[myDate.getDay()]} Время: ${hours}:${minutes}:${second}`;

    console.log(date)
}

// getDate("8/1/2023, 5:55:3");



