define(['uiComponent', 'ko'], (uiComponent, ko) => {
    'use strict';

    return uiComponent.extend({
        defaults: {
            template: 'Magento_Theme/customMultiply',
            text: 'default text from custom1',
            tracks: {
                text: true
            }
        },

        initialize() {
            this._super();

            setTimeout(() => {
                this.text = 'updated text from custom1';
            }, 2000)
        },
    });
})
