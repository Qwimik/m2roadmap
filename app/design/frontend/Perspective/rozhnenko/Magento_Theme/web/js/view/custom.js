define(['uiComponent', 'ko'], (uiComponent, ko) => {
    'use strict';

    return uiComponent.extend({
        // defaults: {
        //     template: 'Magento_Theme/custom',
        //     isActive: ko.observable(true),
        //     text: ko.observable('default text'),
        //     items: ko.observableArray(['item', 'item'])
        // }, // ^ function observables
        defaults: {
            template: 'Magento_Theme/custom',
            isActive: true,
            text: 'default text',
            items: ['item', 'item'],
            tracks: {
                text: true,
                items: true,
                isActive: true
            }
        },

        initObservable() {
            this._super();

            // this.text = ko.observable(this.text); //variant 1 - кожна змінна окремо
            // this.observe(['text', 'isActive']); //variant 2 приймає рядок(для 1 змінної), масив рядків (для багатьох змінних)
            // this.track(true, ['text', 'isActive', 'items']) // той самий tracks у defaults тільки інший запис

            return this; //обов'язково, бо йде чейнінг методів
        },

        initialize() {
            this._super();

            setTimeout(() => {
                this.isActive = false;
                this.text = 'update text';
                this.items.push('item');
            }, 2000)
        },

        toggleState() {
            // this.isActive(!this.isActive());
        }
    });
})
