define(['uiElement'], uiElement => {
    return uiElement.extend({
        defaults: {
            template: 'Magento_Theme/uiDependencies/custom'
        },

        initialize() {
            this._super();

            console.log(this.name);
        }
    });
});
