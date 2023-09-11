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
    case '1':
        alert('Это зима');
        break;
    case '2':
        alert('Это зима');
        break;
    case '3':
        alert('Это весна');
        break;
    case '4':
        alert('Это весна');
        break;
    case '5':
        alert('Это весна');
        break;
    case '6':
        alert('Это лето');
        break;
    case '7':
        alert('Это лето');
        break;
    case '8':
        alert('Это лето');
        break;
    case '9':
        alert('Это осень');
        break;
    case '10':
        alert('Это осень');
        break;
    case '11':
        alert('Это осень');
        break;
    case '12':
        alert('Это зима');
        break;
    default:
        alert('такого месяца не существует')
        break;
}