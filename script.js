const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    asking: function() {
        appData.title = prompt('Как называется ваш проект', 'Калькулятор верстки');     

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какие экраны вам нужны');       
            let price = 0;

            do {
                price = parseFloat(prompt('Сколько будет стоить данная работа?', '15000'));
            } while(!appData.isNumber(price))

            appData.screens.push({
                id: i,
                name: name,
                price: price
            })
        }
        
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какой дополнительный тип услуги нужен?');       
            let price = prompt('Сколько это будет стоить?');
            
            if ( appData.isNumber(price) ) {
               appData.services[name] = +price;
            }        
        }
    },

    addPrices: function() {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for(let key in appData.services) {
            appData.allServicePrices += appData.services[key];
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
        appData.title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
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

        for (const key in appData) {
            console.log(key);
        }
    }
}

appData.start();