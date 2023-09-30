//Задание 1
let str = 'Преобразуйте строку js в верхний регистр JS.';
str = str.toUpperCase();
console.log(str);

//Задание 2
const getArray = (array, stroke) => {

    const newArray = [];
    const regExp = new RegExp(`${stroke}+`, 'gi');

    array.forEach(element => {
        if (regExp.test(element)) {
            newArray.push(element);
        }
    });

    return newArray;
}
console.log(getArray(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['кошка', 'комар']
console.log(getArray(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
console.log(getArray(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []


//Задание 3
const num = 32.58884;
console.log('До меньшего целого - ' + Math.floor(num) +
    ' До большего целого - ' + Math.ceil(num) +
    ' До ближайшего целого - ' + Math.round(num));

//Задание 4
const numMin = Math.min(52, 53, 49, 77, 21, 32);
const numMax = Math.max(52, 53, 49, 77, 21, 32);

console.log(numMin, numMax);

//Задание 5
const getRandom = () => {
    const numRandom = (Math.round(Math.random() * (10 - 1)) + 1);
    console.log(numRandom)
}

getRandom();

//Задание 6
const getRandomArray = (maxValue) => {
    const a = [];
    length = Math.floor(maxValue / 2);

    for (let i = 0; i < length; i++) {
        a.push(Math.round(Math.random() * maxValue));
    }
    return a;
}

console.log(getRandomArray(7));

//Задание 7
const getRandomNum = (minValue, maxValue) => {
    const numRandom = (Math.round(Math.random() * (maxValue - minValue)) + minValue);
    return numRandom;
}

console.log(getRandomNum(1, 10));

//Задание 8 
const currentDate = new Date();
const anotherFormat = currentDate.toLocaleString();
console.log(anotherFormat);

//Задание 9
currentDate.setDate(currentDate.getDate() + 73);
const newFormat = currentDate.toLocaleDateString();
console.log(newFormat);

//Задание 10
const getDate = (userDate) => {

    const myDate = new Date(`${userDate}`);

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

    const date = `Дата: ${myDate.getDate()} ${month[myDate.getMonth()]} ${myDate.getFullYear()} - это ${days[myDate.getDay()]} Время: ${hours}:${minutes}:${second}`;

    return date;
}

console.log(getDate("8/1/2023, 5:55:3"));

const rememberWords = () => {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arr = arr.sort(() => Math.random() - 0.5);
    alert(arr);
    const answerOne = prompt("Чему равнялся первый элемент массива?").toLowerCase();
    const answerTwo = prompt("Чему равнялся последний элемент массива?").toLowerCase();
    for (let i = 0; i < arr.length; i++) {
        if (arr[0].toLowerCase() == answerOne && arr.at(-1).toLowerCase() == answerTwo) {
            alert('Поздравляю! Вы угадали оба элемента');
            break;
        } else if ((arr[0].toLowerCase() == answerOne && arr.at(-1).toLowerCase() !== answerTwo) || (arr[0].toLowerCase() !== answerOne && arr.at(-1).toLowerCase() == answerTwo)) {
            alert('Вы были близки к победе!');
            break;
        } else if (arr[0].toLowerCase() !== answerOne && arr.at(-1).toLowerCase() !== answerTwo) {
            alert('Вы ответили неверно');
            break;
        }
    }
}


