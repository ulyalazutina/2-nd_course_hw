//Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

//Задание 2
let yearOfRelease = 2007;
alert(`В ${yearOfRelease} году вышел первый iPhone`);

//Задание 3
let nameCreator = 'Брендан Эйх';
alert(`${nameCreator} - создатель языка JavaScript`);

//Задание 4
let b = 10;
let c = 2;
let sum = b + c;
let difference = b - c;
let product = b * c;
let quotient = b / c;
alert(`        ${b} + ${c} = ${sum} 
        ${b} - ${c} = ${difference}
        ${b} * ${c} = ${product}
        ${b} / ${c} = ${quotient}
`);

//Задание 5
let d = 2;
let result = d**5;
alert(`2^5 = ${result}`);

//Задание 6
a = 9;
b = 2;
result = a % b;
alert(`Остаток от деления ${a} / ${b} = ${result}`);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Задание 8 
let age = Number(prompt('Сколько вам лет?'));
alert(age);

//Задание 9.0
let user = {
    name:'Иван',
    age:30,
    isAdmin:true
};

//Задание 9.1
user['city of residence'] = 'Москва';

//Задание 9.2
user.age = 50;

//Задание 9.3
delete user['city of residence'];

//Задание 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

//Задание 10
let yourName = prompt('Как вас зовут?');
alert(`Привет, ${yourName}!`);