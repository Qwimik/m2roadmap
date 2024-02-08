// створивши action/model прописуємо їх в залежності
// view - """для відображення елементу"""
define(['uiElement',
    'Perspective_Module/js/action/uiComponentDecomposition',
    'Perspective_Module/js/model/uiComponentDecomposition'
], (uiElement, action, model) => {
    return uiElement.extend({
        defaults: {
            template: 'Perspective_Module/uiComponentDecomposition',
            items: [],
            discountCode: '',
            tracks: {
                items: true,
                discountCode: true
            },
            statefull: {
                discountCode: true
            }
        },

        initialize() {
            this._super();
            this.getData();

            return this;
        },

        getData() {
            // посилаємось на метод в model
            this.items = model.get();
        },

        pushData() {
            // посилаємось на функцію action
            action(this.discountCode);
        },

    });
});
