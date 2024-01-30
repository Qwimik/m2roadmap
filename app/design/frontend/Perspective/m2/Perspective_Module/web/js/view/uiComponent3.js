define(['uiComponent', 'ko'], (uiComponent, ko) => {
    return uiComponent.extend({
        defaults: {
            template: 'Perspective_Module/uiComponent3',
            isActive: ko.observable(true),
            text: ko.observable('default text'),
            items: ko.observableArray(['item', 'item', 'item'])
        },

        initialize() {
            this._super();
        }
    });
})
