const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: [],
    asking: function() {
        
        appData.title = appData.checkAnswerType('string', 'Как называется ваш проект?');

        for (let i = 0; i < 2; i++) {
            let name = appData.checkAnswerType('string', 'Какие экраны вам нужны?');      
            let price = 0;

            do {
                price = appData.checkAnswerType('number', 'Сколько будет стоить данная работа?');
            } while(!appData.isNumber(price))

            appData.screens.push({
                id: i,
                name: name,
                price: +price
            })
        }
        
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');

        for (let i = 0; i < 2; i++) {
            let name = appData.checkAnswerType('string', 'Какой дополнительный тип услуги нужен?');    
            let price = appData.checkAnswerType('number', 'Сколько это будет стоить?');
            
            if ( appData.isNumber(price) ) {
                appData.services.push({
                    id: i,
                    name: name,
                    price: +price  
                })
            }        
        }
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

        for(let key of appData.services) {
            appData.allServicePrices += key.price;
        }
    },

    isNumber: function(num) {
        num = parseFloat(num)
        if ( !isNaN(num) && isFinite(num)) {
            return num;
        }
    },

    getFullPrice: function(screenPrice, allServicePrices) {
        appData.fullPrice = screenPrice + allServicePrices
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
        appData.asking();
        appData.addPrices();
        appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        appData.getTitle(appData.title);
        
        appData.logger();
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

appData.start();