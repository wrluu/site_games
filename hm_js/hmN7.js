//1 задание
console.log('js'.toUpperCase());

//2 задание
function filterByStart(strings, start) {
    return strings.filter(str => str.toLowerCase().startsWith(start.toLowerCase()));
}
console.log(filterByStart(['apple', 'banana', 'Apricot', 'avocado'], 'ap'));

//3 задание
const number = 32.58884;
console.log(Math.floor(number)); // До меньшего целого
console.log(Math.ceil(number));  // До большего целого
console.log(Math.round(number)); // До ближайшего целого

//4 задание
console.log(Math.min(52, 53, 49, 77, 21, 32)); // Минимальное значение
console.log(Math.max(52, 53, 49, 77, 21, 32)); // Максимальное значение

//5 задание
function randomNumber() {
    console.log(Math.floor(Math.random() * 10) + 1);
}
randomNumber();

//6 задание
function randomArray(n) {
    const length = Math.floor(n / 2);
    return Array.from({ length }, () => Math.floor(Math.random() * (n + 1)));
}
console.log(randomArray(10));

//7 задание
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInRange(5, 10));

//8 задание
console.log(new Date());

//9 задание
const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log(futureDate);

//10 задание
function formatDate(date) {
    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.
Время: ${hours}:${minutes}:${seconds}`;
}
console.log(formatDate(new Date()));