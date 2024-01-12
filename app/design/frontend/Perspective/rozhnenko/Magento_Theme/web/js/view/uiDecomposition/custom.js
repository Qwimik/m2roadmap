define(['uiElement'], uiElement => {
    return uiElement.extend({
        defaults: {
            template: 'Magento_Theme/uiDecomposition/custom',
            items: [],
            discountCode: '',
            tracks: {
                items: true,
                discountCode: true
            }
        },

        initialize() {
            this._super();
            this.getData();

            return this;
        },

        getData() {},

        pushData() {}
    });
});
