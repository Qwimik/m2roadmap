define(['jquery'], ($) => {
    const mixin = {
        // перевизначення options
        options: {
            mediaBreakpoint: '(min-width: 1024px)'
        },
        // перевизначення методу init()
        _init() {
            console.log('before origin widget');
            // виклик оригінального віджету
            this._super();
            console.log('after origin widget');
        }
    }
    return function (originalWidget) {
        $.widget('perspective.customJqueryWidget', originalWidget, mixin);

        return $.perspective.customJqueryWidget;
    }
});
