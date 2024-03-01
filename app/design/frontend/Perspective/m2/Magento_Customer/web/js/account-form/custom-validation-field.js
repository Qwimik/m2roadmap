define(['jquery', 'validation', 'jquery-ui-modules/widget'], ($) => {
    $.widget('perspective.validField', {
        _init() {
            this._on(this.element, {
                input: this.onChange.bind(this)
            });

        },
        onChange() {
            $(this.element).validation();
            if (!this.element.validation('isValid')) {
                console.log('Form is not valid');
                $(this.element).removeClass('valid-success').addClass('mage-error');
            } else {
                console.log('Form is valid!!! Great!');
                $(this.element).removeClass('mage-error').addClass('valid-success');
            }
        },
    });

    return $.perspective.validField;
});
