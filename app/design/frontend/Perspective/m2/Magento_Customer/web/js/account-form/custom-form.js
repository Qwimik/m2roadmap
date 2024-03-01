define(['jquery', 'validation', 'jquery-ui-modules/widget'], ($) => {
    $.widget('perspective.customFormScript', {
        _init() {
            this._on(this.element, {
                submit: this.onSubmit.bind(this),
            });
        },

        onSubmit(e) {
            e.preventDefault();

            if (!this.element.validation('isValid')) {
                console.log('Form is not valid');
                return this;
            }
            console.log('Form is valid!!! Great!');
        }
    });

    return $.perspective.customFormScript;
});
