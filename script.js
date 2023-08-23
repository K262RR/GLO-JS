let title = 'KUBAL.RU';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 1000;
let fullPrice = 6900;
let adaptive = true;
let rollback = 0;

console.log( typeof(title) );
console.log( typeof(fullPrice) );
console.log( typeof(adaptive) );
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} долларов`);
console.log(`Стоимость разработки сайта ${fullPrice} долларов`);
console.log( screens.toLocaleLowerCase().split(', ') );
console.log( fullPrice * (rollback / 100) );

title = prompt('Как называется ваш проект');
screens  = prompt('Какие типы экранов нужно разработать?');
screenPrice  = +prompt('Сколько будет стоить данная работа?');
adaptive  = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let serviceCost1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let serviceCost2 = +prompt('Сколько это будет стоить?');

fullPrice = screenPrice + serviceCost1 + serviceCost2;

if (fullPrice > 30000) {
    rollback = 10;
    console.log('Скидка не предусмотрена');
}
else if ((15000 < fullPrice) && (fullPrice <= 30000)) {
    rollback = 5;
    console.log('Скидка не предусмотрена');
}
else if ((0 <= fullPrice) && (fullPrice <= 15000)) {
    console.log('Скидка не предусмотрена');
}
else {
    console.log('Что-то пошло не так');
}

let servicePercentPrice = fullPrice - Math.ceil(fullPrice * (rollback / 100) )
console.log(`Итоговая стоимость за вычетом отката: ${servicePercentPrice}`);











