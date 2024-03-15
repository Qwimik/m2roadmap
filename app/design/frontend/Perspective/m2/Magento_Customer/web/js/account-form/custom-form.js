define(['jquery', 'mage/url', 'validation', 'jquery-ui-modules/widget'], ($, url) => {
    $.widget('perspective.customFormScript', {
        _init() {
            this._on(this.element, {
                submit: this.onSubmit.bind(this),
            });
        },
        onSubmit(e) {
            e.preventDefault();
            if (!this.element.validation('isValid')) {
                alert('Form is not valid');
                return this;
            }
            const email = $('#email_address').val();
            $.ajax({
                url: url.build('perspectiveregister/index/check'),
                data: {email: email},
                success: function (result) {
                    if (result) {
                        e.currentTarget.submit();
                    } else {
                        window.location.href = url.build('customer/account/login');
                    }
                }
            });
        }
    });
    return $.perspective.customFormScript;
});
