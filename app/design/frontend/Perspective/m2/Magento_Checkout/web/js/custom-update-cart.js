define([
    'jquery',
    'Magento_Checkout/js/action/get-totals',
    'Magento_Customer/js/customer-data'
], function ($, getTotalsAction, customerData) {
    return function () {
        //for click on btns
        $(document).on('click', '.cart-qty-wrapper', (e) => {
            const inputEl = $(e.target).siblings('.field.qty').find('.input-text.qty');
            let currentQty;

            if (inputEl) {
                currentQty = parseInt(inputEl.val());
            }

            if ($(e.target).hasClass('btn-qty-dec')) {
                if (currentQty && currentQty > 1) {
                    let newQty = currentQty - 1;
                    inputEl.val(newQty);
                    updateQtyCart();
                }
            }

            if ($(e.target).hasClass('btn-qty-inc')) {
                let newQty = currentQty + 1;
                inputEl.val(newQty);
                updateQtyCart();
            }
        })

        // for blur
        $(document).on('change', 'input[name$="[qty]"]', updateQtyCart);

        // function from link https://community.magento.com/t5/Magento-2-x-Admin-Configuration/Instead-of-update-cart-button-qty-should-get-update-on-click-of/td-p/503165
        function updateQtyCart() {
            const form = $('form#form-validate');
            $.ajax({
                url: form.attr('action'),
                data: form.serialize(),
                showLoader: true,
                success: function (res) {
                    const parsedResponse = $.parseHTML(res);
                    const result = $(parsedResponse).find("#form-validate");
                    const sections = ['cart'];

                    $("#form-validate").replaceWith(result);
                    // The mini cart reloading
                    customerData.reload(sections, true);
                    // The totals summary block reloading
                    const deferred = $.Deferred();
                    getTotalsAction([], deferred);
                },
                error: function (xhr, status, error) {
                    const err = eval("(" + xhr.responseText + ")");
                    console.log(err.Message);
                }
            });
        }
    }
})
