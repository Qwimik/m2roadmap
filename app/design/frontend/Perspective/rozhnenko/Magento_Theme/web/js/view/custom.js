define(['uiComponent', 'ko'], (uiComponent, ko) => {
    'use strict';

    return uiComponent.extend({
        // defaults: {
        //     template: 'Magento_Theme/custom',
        //     isActive: ko.observable(true),
        //     text: ko.observable('default text'),
        //     items: ko.observableArray(['item', 'item'])
        // }, //
        defaults: {
            template: 'Magento_Theme/custom',
            isActive: ko.observable(true),
            text: ko.observable('default text'),
            items: ko.observableArray(['item', 'item'])
        },

        initObservable() {
            this._super();

            // this.text = ko.observable(this.text); //variant 1
            this.observe('text'); //variant 2 приймає рядок(для 1 змінної), масив рядків (для багатьох змінних)

            return this; //обов'язково, бо йде чейнінг методів
        },

        initialize() {
            this._super();

            setTimeout(() => {
                this.isActive(false);
                this.text('update text');
                this.items.push('item');
            }, 2000)
        },

        toggleState() {
            this.isActive(!this.isActive());
        }
    });
})
