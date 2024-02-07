define(['uiElement'], (uiElement) => {
    return uiElement.extend({
        defaults: {
            template: 'Perspective_Module/uiComponentState',
            customerName: '',
            tracks: {
                customerName: true
            },
            // statefull - по замовчуванню зберігає дані в локалсторейдж (в appData), ключ - назва скоупа (uiComponentState),
            // значення - customerName: '';
            statefull: {
                customerName: true
            }
        }
    });
});
