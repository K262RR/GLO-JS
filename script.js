// ДЗ. Основная часть

const title = 'KUBAL.RU';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 600;
const rollback = 10;
const fullPrice = 6900;
const adaptive = true;

console.log( typeof(title) );
console.log( typeof(fullPrice) );
console.log( typeof(adaptive) );
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} долларов`);
console.log(`Стоимость разработки сайта ${fullPrice} долларов`);
console.log( screens.toLocaleLowerCase().split(', ') );
console.log( fullPrice * (rollback / 100) );








