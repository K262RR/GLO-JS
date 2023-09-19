const pageTitle = document.getElementsByTagName('h1');
// console.log(pageTitle[0].textContent);

const costButtons = document.getElementsByClassName('handler_btn');
// console.log(costButtons[0]);

const pluScreenButton = document.querySelector('.screen-btn');
// console.log(pluScreenButton);

const otherItemsPercent = document.querySelectorAll('.other-items.percent');
// console.log(otherItemsPercent);

const otherItemsNumber = document.querySelectorAll('.other-items.number ');
// console.log(otherItemsNumber);

const rollbacInput = document.querySelector('.rollback').querySelector('input');
// console.log(rollbacInput);

const rollbackSpan = document.querySelector('.rollback').querySelector('.range-value');
// console.log(rollbackSpan);

// Нужно перебрать, чтобы получить сами элементы, а не коллекцию
const totalInputs = document.getElementsByClassName('total-input');

const totalInputsArray = []
    for (let el of totalInputs) {
        totalInputsArray.push(el)
    } 
// console.log(totalInputsArray);

let screens = document.querySelectorAll('.screen');
// console.log(screens);


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    // servicePercentPrice: 0,
    
    
    init: function () {
        appData.addTitle();
        costButtons[0].addEventListener('click', appData.start)
        pluScreenButton.addEventListener('click', appData.addScreenBlock)
    },

    addTitle: function() {
        document.title = title.textContent;
    },

    addServices: function () {
        otherItemsPercent.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
    }, 

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
        console.log(cloneScreen);
    }, 

    checkAnswerType: function(type, message) {
            
        data = prompt(message);
    
        if (type === 'string') {
            if (!isNaN(Number(data))) appData.checkAnswerType(type, message);
        } else if (type === 'number') {
            if (isNaN(Number(data))) appData.checkAnswerType(type, message);
        } else {
            console.log('Неизвестный тип');
            appData.checkAnswerType();
        }
        return data;
    },

    addPrices: function() {

        appData.screenPrice = appData.screens.reduce((sum, value) => {
            return sum + value.price;
        }, 0);

        for(let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for(let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }

        appData.fullPrice = appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber

    },

    isNumber: function(num) {
        num = parseFloat(num)
        if ( !isNaN(num) && isFinite(num)) {
            return num;
        }
    },

    showResult: function() {
        totalInputsArray[0].value = appData.screenPrice;
        totalInputsArray[2].value = appData.servicePricesPercent + appData.servicePricesNumber;
        totalInputsArray[3].value = appData.fullPrice;

    },

    addScreens: function() {
        screens = document.querySelectorAll('.screen');

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            });
        });

        console.log(appData.screens);
    },

    getTitle: function(title){
        title = title.trim()
        title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    },

    getRollbackMessage: function(fullPrice) {
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
    
    },

    getServicePercentPrices: function(fullPrice) {
        const rollback = appData.getRollbackMessage(fullPrice)
        appData.servicePercentPrice =  fullPrice - Math.ceil(fullPrice * (rollback / 100))
    },

    start: function() {

        appData.addScreens();
        appData.addServices()

        appData.addPrices();
        // appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        // appData.logger();
        console.log(appData);
        appData.showResult();
    },
    
    logger: function() {
        console.log('Стоимость проекта: ' + appData.screenPrice);
        console.log('Стоимость дополнительных услуг: ' + appData.allServicePrices);
        console.log('Итого с учетом скидки: ' + appData.servicePercentPrice);

        console.log(appData.screens);
        console.log(appData.services);

        for (const key in appData) {
            console.log(key);
        }
    }
}

appData.init();


