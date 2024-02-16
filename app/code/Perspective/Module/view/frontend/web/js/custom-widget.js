define(['jquery', 'jquery-ui-modules/widget'], ($) => {
    $.widget('perspective.customJqueryWidget', {
        options: {
            mediaBreakpoint: '(min-width: 768px)'
        },

        _init() {
            console.log('console.log from custom-widget');
            console.log('options from custom-widget: ', this.options);
        }
    });

    return $.perspective.customJqueryWidget;
});
