define(['uiElement'], uiElement => {
    return uiElement.extend({
        defaults: {
            template: 'Magento_Theme/uiStatefull/custom',
            customerName: '',
            tracks: {
                customerName: true
            },
            statefull: {
                customerName: true
            }
        }
    });
});
