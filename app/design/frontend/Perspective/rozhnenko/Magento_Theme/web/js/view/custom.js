define(['uiComponent', 'ko'], (uiComponent, ko) => {
    'use strict';

    return uiComponent.extend({
        defaults: {
            template: 'Magento_Theme/custom',
            isActive: ko.observable(false)
        },

        initialize() {
            this._super();
        },

        toggleState() {
            this.isActive(!this.isActive());
        }
    });
})
