define(['uiComponent', 'ko'], (uiComponent, ko) => {
    'use strict';

    return uiComponent.extend({
        defaults: {
            isActive: ko.observable(false)
        },

        initialize() {
            this._super();

            // setTimeout(() => {
            //     this.text('---update text---')
            // }, 2000)
        },

        toggleState() {
            this.isActive(!this.isActive());
        }
    });
})
