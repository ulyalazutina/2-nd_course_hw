// Задание 1
let password = 'пароль';
let userPassword = prompt('Введите пароль');

(password === userPassword) ? alert('Пароль введен верно') : alert('Пароль введен неправильно');

//Задание 2
let c = 2;

(c > 0 && c < 10) ? console.log('Верно') : console.log('Неверно');

//Задание 3
let d = 101;
let e = 5;

(d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');

//Задание 4
let a = '2';
let b = '3';

alert(Number(a) + Number(b));

//Задание 5
let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case '1': case '2': case '12':
        alert('Это зима');
        break;
    case '3': case '4': case '5':
        alert('Это весна');
        break;
    case '6': case '7': case '8':
        alert('Это лето');
        break;
    case '9': case '10': case '11':
        alert('Это осень');
        break;
    default:
        alert('такого месяца не существует')
        break;
}


//Задание 7
let number = Number(prompt('Пожалуйста, введите любое число'));

if (!isNaN(number)) {
    if (number % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
} else {
    alert('Вы ввели не число')
}
//Задание 8
let clientOS = 1;

if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
} else {
    console.log('Установите версию приложения для iOS по ссылке');
}

//Задание 9
let clientDeviceYear = 2015;
clientOS = 0;

if (clientOS == 0 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке')
} else if (clientOS == 0 && clientDeviceYear >= 2015) {
    console.log('Установите версию приложения для iOS  по ссылке')
}
if (clientOS == 1 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке')
} else if (clientOS == 1 && clientDeviceYear >= 2015) {
    console.log('Установите версию приложения для Android  по ссылке')
}