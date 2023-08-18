// ДЗ. Часть 1
const title = 'KUBAL.RU';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 600;
const rollback = 10;
const fullPrice = 6900;
const adaptive = true;

// ДЗ. Часть 2
console.log( typeof(title) );
console.log( typeof(fullPrice) );
console.log( typeof(adaptive) );

console.log(screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} долларов`);
console.log(`Стоимость разработки сайта ${fullPrice} долларов`);

console.log( screens.toLocaleLowerCase().split(', ') );

console.log( fullPrice * (rollback / 100) );

// ДЗ. Часть 3







