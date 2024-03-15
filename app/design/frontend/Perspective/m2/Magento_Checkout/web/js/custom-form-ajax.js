define(['jquery', 'mage/url', 'validation', 'jquery-ui-modules/widget'], ($, url) => {
    $.widget('perspective.customFormAjaxScript', {
        _init() {
            this._on(this.element, {
                submit: this.onSubmit.bind(this),
            });
        },
        onSubmit(e) {
            e.preventDefault();
            console.log('090909')
            // if (!this.element.validation('isValid')) {
            //     alert('Form is not valid');
            //     return this;
            // }
            // const email = $('#email').val();
            // $.ajax({
            //     url: url.build('perspectiveregister/index/check'),
            //     data: {email: email},
            //     success: function (result) {
            //         if (result) {
            //             console.log('22222')
            //             // e.currentTarget.submit();
            //         } else {
            //             console.log('33333')
            //             //window.location.href = url.build('customer/account/login');
            //         }
            //     }
            // });
        }
    });
    return $.perspective.customFormAjaxScript;
});
