define(['jquery', 'validation', 'jquery-ui-modules/widget'], ($) => {
    $.widget('perspective.validField', {
        _init() {
            this._on(this.element, {
                input: this.onChange.bind(this)
            });
            $(this.element).validation();
        },
        onChange() {
            if (!this.element.validation('isValid')) {
                $(this.element).removeClass('valid-success').addClass('mage-error');
            } else {
                $(this.element).removeClass('mage-error').addClass('valid-success');
            }
        },
    });

    return $.perspective.validField;
});
