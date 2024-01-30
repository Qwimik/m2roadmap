define(['uiComponent', 'mage/translate'], (uiComponent, $t) => {
    return uiComponent.extend({
        defaults: {
            text: $t('text from uiComponent1.js')
        },

        initialize() {
            this._super();
        }
    });
})
