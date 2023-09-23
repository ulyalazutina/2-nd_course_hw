//Задание 1
let getMin = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// console.log(getMin(8, 4));

//Задание 2
const getEvenOrOdd = (number) => {
    if (number % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

// console.log(getEvenOrOdd(3));

//Задание 3.1
let getPerfectSquare = (number) => {
    console.log(number ** 2);
}

// getPerfectSquare(2);

//Задание 3.2
getPerfectSquare = (number) => {
    return number ** 2;
}

// console.log(getPerfectSquare(3));

//Задание 4
let getGreeting = (age) => {
    age = prompt('Сколько вам лет?');
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (0 <= age && age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!')
    }
}

// getGreeting();

//Задание 5
let getMult = (a, b) => {
    if (!isNaN(a) && !isNaN(b)) {
        return a * b;
    } else {
        return 'Одно или оба значения не являются числом';
    }
}

// console.log(getMult(5, 4));

//Задание 6
let getNumberCubed = (number) => {
    number = prompt('Введите число');
    if (!isNaN(number)) {
        let result = number ** 3;
        return `${number} в кубе равняется ${result}`
    } else {
        return 'Переданный параметр не является числом';
    }
}

// alert(getNumberCubed());

//Задание 7
function getArea() {
    return 3.14 * this.radius ** 2;
}

function getPerimeter() {
    return 2 * 3.14 * this.radius;
}

const circle1 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter
}

const circle2 = {
    radius: 3,
    getArea: getArea,
    getPerimeter: getPerimeter
}

// console.log(`Площадь окружности равна ${circle1.getArea()}`);
// console.log(`Периметр окружности равен ${circle1.getPerimeter()}`);
// console.log(`Площадь окружности равна ${circle2.getArea()}`);
// console.log(`Периметр окружности равен ${circle2.getPerimeter()}`);

//Задание по макету
const getSeason = (numberMonth) => {
    numberMonth = Number(prompt("Введите номер месяца"));
    if (!isNaN(numberMonth)) {
        if (numberMonth === 1 || numberMonth === 2 || numberMonth === 12) {
            alert('Зима');
        } else if (numberMonth === 3 || numberMonth === 4 || numberMonth === 5) {
            alert('Весна');
        } else if (numberMonth === 6 || numberMonth === 7 || numberMonth === 8) {
            alert('Лето');
        } else if (numberMonth === 9 || numberMonth === 10 || numberMonth === 11) {
            alert('Осень');
        }
        else {
            alert('Такого месяца не существует');
        }
    } else {
        alert('Вы ввели не число');
    }
}