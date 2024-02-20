define(['jquery', 'validation', 'jquery-ui-modules/widget'], ($) => {
    $.widget('perspective.formScript', {
        _init() {
            this._on(this.element, {
                submit: this.onSubmit.bind(this)
            });
            //$(this.element).on('input', this.onChange.bind(this));
        },

        onSubmit(event) {
            event.preventDefault();

            if (!this.element.validation('isValid')) {
                console.log('Form is not valid');
                return this;
            }

            console.log('Form is valid!!! Great!')
        },
        onChange(event) {
            console.log(event)
            if (!this.element.validation('isValid')) {
                console.log('Form is not valid');
                return this
            }

            console.log('Form is valid!!! Great!');
        }
    });

    return $.perspective.formScript;
});
