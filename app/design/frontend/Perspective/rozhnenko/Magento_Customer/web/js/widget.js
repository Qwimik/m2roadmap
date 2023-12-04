define(['jquery', 'validation', 'jquery-ui-modules/widget'], $ => {
    'use strict';

    $.widget('perspective.customValidationWidget', {
        _init() {
            this._on(this.element, {
                keyup: this.onKeyup.bind(this)
            })
            this.element.validation();
        },

        onKeyup(e) {
            if (!this.element.validation('isValid')) {
                return this;
            }
        }
    })

    return $.perspective.customValidationWidget;
})
