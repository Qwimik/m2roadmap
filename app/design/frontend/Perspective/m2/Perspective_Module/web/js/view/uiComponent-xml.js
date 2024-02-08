define(['uiElement'], (uiElement) => {
    return uiElement.extend({
        defaults: {
            template: 'Perspective_Module/uiComponent-xml',
            text: 'text from uiComponent-xml.js',
            tracks: {
                text: true
            }
        },

        initialize() {
            this._super();
        }
    });
})
