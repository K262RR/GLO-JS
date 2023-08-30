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
        } while(!appData.isNumber(appData.screenPrice))
        
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    isNumber: function(num) {
        num = parseFloat(num)
        if ( !isNaN(num) && isFinite(num)) {
            return num;
        }
    },

    getAllServicePrices: function() {

        let sum = 0;
    
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            }
    
            let currentValue = prompt('Сколько это будет стоить?');
            
            if ( appData.isNumber(currentValue) ) {
                sum += parseFloat(currentValue);
            }        
        }
    
        return sum
    }, 

    getFullPrice: function(screenPrice, allServicePrices) {
        return screenPrice + allServicePrices
    },

    getTitle: function(title){
        title = title.trim()
        return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
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
        return fullPrice - Math.ceil(fullPrice * (rollback / 100))
    },

    start: function() {
        appData.asking();
        appData.allServicePrices  = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        appData.title = appData.getTitle(appData.title);
        appData.logger();
    },
    
    logger: function() {
        console.log('Стоимость проекта: ' + appData.screenPrice);
        console.log('Стоимость дополнительных услуг: ' + appData.allServicePrices);
        console.log('Итого с учетом скидки: ' + appData.fullPrice);

        for (const key in appData) {
            console.log(key);
        }
    }
}

appData.start();