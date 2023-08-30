// Объявление переменных
// let title;
// let screens;
// let screenPrice;
// let adaptive;
// let rollback = 0;
// let service1;
// let service2;
// let title = '    KuBaL.RU  ';
// const screens = 'Десктоп, мобилка';
// const screenPrice = 10000;
// const adaptive = true;
// const serviceCost1 = 20000;
// const serviceCost2 = 30000;

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    asking: function() {
        appData.title = prompt('Как называется ваш проект', 'Калькулятор верстки');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные');
    
        do {
            appData.screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?', '15000'));
        } while(!isNumber(appData.screenPrice))
        
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    }
}




// Объявление функций
const isNumber = function(num) {
    num = parseFloat(num)
    if ( !isNaN(num) && isFinite(num)) {
        return num;
    }
}

// Функция возвращает сумму всех дополнительных услуг
const getAllServicePrices = function() {
    // return serviceCost1 + serviceCost2;
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
        }

        let currentValue = prompt('Сколько это будет стоить?');
        
        if ( isNumber(currentValue) ) {
            sum += parseFloat(currentValue);
        }        
    }

    return sum
}

// const showTypeOf = function(variable) {
//     return console.log( typeof(variable) );
// }

// Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг
function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices
}

// Функция возвращает title меняя его таким образом: первый символ с большой буквы,
const getTitle = function(title){
    title = title.trim()
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
}

// Узнаем процент скидки
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
appData.asking();
appData.allServicePrices  = getAllServicePrices();
appData.fullPrice = getFullPrice(appData.screenPrice, appData.allServicePrices);
appData.servicePercentPrice = getServicePercentPrices(appData.fullPrice, appData.rollback);
appData.title = getTitle(appData.title);

console.log(appData.fullPrice);
console.log(appData.allServicePrices);

// Выводы в консоль и все остальное
// showTypeOf(title);
// showTypeOf(fullPrice);
// showTypeOf(adaptive);

// console.log('Необходимые экраны: ' + screens);
// console.log('Стоимость за вычетом процента отката: ' + servicePercentPrice);
// console.log('Стоимость дополнительных услуг: ' + allServicePrices);
// console.log('Общая стоимость работ: ' + fullPrice);













