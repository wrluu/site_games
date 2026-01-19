//1 задание
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

//2 задание
function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, ruleFunction) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peopleForFilter = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(peopleForFilter, isMale));

//3 задание
let intervalId = setInterval(() => {
    console.log(new Date());
}, 3000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("30 секунд прошло");
}, 30000);

//4 задание
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

//5 задание
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));
