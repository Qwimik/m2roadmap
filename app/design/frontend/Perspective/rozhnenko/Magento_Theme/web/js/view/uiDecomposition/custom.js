define(['uiElement',
        'Magento_Theme/js/model/uiDecomposition/custom',
        'Magento_Theme/js/action/uiDecomposition/custom'
], (uiElement, model, action) => {
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

        getData() {
            this.items = model.get();
        },

        pushData() {
            action(this.discountCode);
        }
    });
});
// в view прийнято, тільки рендерити дані
