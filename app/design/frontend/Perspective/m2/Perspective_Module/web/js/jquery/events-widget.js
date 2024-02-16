define(['jquery', 'jquery-ui-modules/widget'], ($) => {
    $.widget('perspective.eventsWidget', {
        _init() {
            this.element.on('click', () => {
                console.log('click from events-widget');
            });
        }
    });

    return $.perspective.eventsWidget;
});
