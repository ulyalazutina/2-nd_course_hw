//Задание 1
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 10) {
        console.log(arr[i]);
        break;
    } else {
        console.log(arr[i]);
    }
}

//Задание 2
console.log(`Индекс числа 4 - ${arr.indexOf(4)}`);

//Задание 3
const array = [1, 3, 5, 10, 20];
console.log(array.join(' '));

//Задание 4
let multidimensionalArray = [];
for (let i = 0; i < 3; i++) {
	multidimensionalArray[i] = []; // создаем подмассив
	
	for (let j = 0; j < 3; j++) {
		multidimensionalArray[i].push(1); // заполняем подмассив числами
	}
}
console.log(multidimensionalArray);

//Задание 5
const add = [1, 1, 1];
add.push(2, 2, 2)
console.log(add);

//Задание 6
const sortArr = [9, 8, 7, 'a', 6, 5];
sortArr.sort().pop();
console.log(sortArr);

//Задание 7
const searchArray = [9, 8, 7, 6, 5];
let userNumber = Number(prompt('Введите число'));

if (!isNaN(userNumber)) {

    if (searchArray.includes(userNumber)) {
        alert('Угадал');
    } else {
        alert('Не угадал');
    }
    
} else {
    alert('Вы ввели не число');
}

//Задание 8
const str = 'abcdef';
const arrStr = str.split('').reverse().join('');
console.log(arrStr);

//Задание 9
const transformation = [[1, 2, 3,], [4, 5, 6]];
const result = transformation.reduce(function (c, d) {
    return c.concat(d);
})
console.log(result);

//Задание 10
const sum = [1, 2, 3, 4];

for (let i = 0; i < sum.length; i++) {

    if (sum[i + 1]) {
        console.log(sum[i] + sum[i + 1])
    } else {
        console.log(sum[i]);
    }

}

//Задание 11
let squared = [1, 2, 3, 4];
let squaredResult = squared.map(item => (item ** 2));
console.log(squaredResult);

//Задание 12
function lengthWord(array) {
    let result = array.map(item => (item.length));
    console.log(result);

} lengthWord(['слово', '', 'слог', 'длинное предложение', 'буква']);

//Задание 13
function filterPositive(array) {
    let result = array.filter(item => item < 0);
    console.log(result);

}
filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]

//Задание 14
const randomNumbers = [];

for (let i = 0; i < 10; i++) {
    let num = Math.floor((Math.random() * 10) + 1);
    randomNumbers.push(num);
}

const evenNumbers = randomNumbers.filter(item => item % 2 === 0)
console.log(randomNumbers)
console.log(evenNumbers)

//Задание 15
const randomNum = [];

for (let i = 0; i < 6; i++) {
    let num = Math.floor((Math.random() * 10) + 1);
    randomNum.push(num);
}

let arithmetic = randomNum.reduce((item, index) => item + index);
arithmetic = arithmetic / 2;
console.log(randomNum);
console.log(arithmetic);
