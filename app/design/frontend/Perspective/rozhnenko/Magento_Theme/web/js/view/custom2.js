define(['uiComponent'], (uiComponent) => {
    'use strict';

    return uiComponent.extend({
        defaults: {
            template: 'Magento_Theme/customMultiply',
            text: '',
            tracks: {
                text: true
            },
            modules: {
                custom1: 'custom1'
            }
        },

        initialize() {
            this._super();

            console.log(this.custom1());
        }
    });
})
