// Объявление переменных
let title = prompt('Как называется ваш проект');
const screens = prompt('Какие типы экранов нужно разработать?');
const screenPrice = +prompt('Сколько будет стоить данная работа?');
const adaptive = confirm('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const serviceCost1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const serviceCost2 = +prompt('Сколько это будет стоить?');
let rollback = 0;

// let title = '    KuBaL.RU  ';
// const screens = 'Десктоп, мобилка';
// const screenPrice = 10000;
// const adaptive = true;
// const serviceCost1 = 20000;
// const serviceCost2 = 30000;


// Объявление функций
const showTypeOf = function(variable) {
    return console.log( typeof(variable) );
}

// Функция возвращает сумму всех дополнительных услуг.
const getAllServicePrices = function(serviceCost1, serviceCost2) {
    return serviceCost1 + serviceCost2;
}

// Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг
function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices
}

// Функция возвращает title меняя его таким образом: первый символ с большой буквы,
const getTitle = function(title){
    title = title.trim()
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
}

// Узнаем прцоент скидки
const getRollbackMessage = function(fullPrice) {
    if (fullPrice > 30000) {
        console.log('Ваша скидка - 10%');
        return rollback = 10;
    }
    else if ((15000 < fullPrice) && (fullPrice <= 30000)) {
        console.log('Ваша скидка - 5%');
        return rollback = 5;
        
    }
    else if ((0 <= fullPrice) && (fullPrice <= 15000)) {
        console.log('У вас пока нет скидки');
        return rollback = 0;    }
    else {
        console.log('При расчете скидки что-то пошло не так');
        return false
    }

}

// Функция возвращает итоговую стоимость за вычетом процента отката
const getServicePercentPrices = function(fullPrice) {
    const rollback = getRollbackMessage(fullPrice)
    return fullPrice - Math.ceil(fullPrice * (rollback / 100))
}


// Вызовы функций
const allServicePrices  = getAllServicePrices(serviceCost1, serviceCost2);
const fullPrice = getFullPrice(screenPrice, allServicePrices);
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle(title);


// Выводы в консоль и все остальное
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log('Необходимые экраны: ' + screens);

// console.log('Стоимость дополнительных услуг: ' + allServicePrices);
// console.log('Общая стоимость работ: ' + fullPrice);
console.log('Стоимость за вычетом процента отката: ' + servicePercentPrice);












