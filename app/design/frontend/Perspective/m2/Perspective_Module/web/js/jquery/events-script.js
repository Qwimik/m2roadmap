define(['jquery', 'Perspective_Module/js/jquery/events-widget'], ($) => {
    return function (config, element) {
        // виклик скрипту
        $(element).eventsWidget();

        $(element).on('click', () => {
            console.log('click from events-script')
        })
    };
});
