define(['uiComponent', 'ko'], (uiComponent, ko) => {
    return uiComponent.extend({
        defaults: {
            text: 'text from uiComponent1.js'
        },

        initialize() {
            this._super();
        }
    });
})
