define(['uiComponent', 'ko'], (uiComponent, ko) => {
    return uiComponent.extend({
        defaults: {
            template: 'Perspective_Module/uiComponent2',
            isActive: ko.observable(false)
        },

        initialize() {
            this._super();
        },

        toggleState() {
            this.isActive(!this.isActive());
        }
    });
})
