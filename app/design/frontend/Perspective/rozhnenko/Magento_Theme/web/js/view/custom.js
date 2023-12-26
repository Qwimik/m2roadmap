define(['uiComponent', 'ko'], (uiComponent, ko) => {
    'use strict';

    return uiComponent.extend({
        defaults: {
            text: ko.observable('default text')
        },

        initialize() {
            this._super();

            setTimeout(() => {
                this.text('---update text---')
            }, 2000)
        }
    });
})
