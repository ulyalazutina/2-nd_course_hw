//Задание 1
let count = 1;
while (count <=2) {
    console.log('Привет');
    count++;
}

//Задание 2
let numbers = 1;
while (numbers <= 5) {
    console.log(numbers);
    numbers++;
}

//Задание 3
for (let numbers = 7; numbers <= 22; numbers++) {
    console.log(numbers);
}


//Задание 4
let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}
for (const item in obj) {
    console.log(`${item} — зарплата ${obj[item]} долларов.`)
}

//Задание 5
let num = 1;
for (let n = 1000; n > 50; num++) {
    n /= 2;
    console.log(n);
    if (n < 50) {
        break;
    }
}
console.log(`Количество итераций = ${num}`);


//Задание 6
let friday = 6;
for (let day = 1; day < 31; day++) {
    if (day === friday) {
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
        friday += 7;
    }
}
