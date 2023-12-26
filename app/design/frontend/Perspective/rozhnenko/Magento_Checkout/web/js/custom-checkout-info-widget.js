define(['jquery', 'mage/translate', 'Magento_Customer/js/customer-data', 'jquery-ui-modules/widget'], ($, $t, customerData) => {
    $.widget('perspective.customCheckoutInfo', {
        options: {
            summary_count: 0,
            subtotal: 0
        },
        _init() {
            const cart = customerData.get('cart')();
            this.onCartUpdated(cart);
            customerData.get('cart').subscribe(this.onCartUpdated.bind(this))
        },
        onCartUpdated(cart) {
            this.options.summary_count = cart.summary_count;
            this.options.subtotal = cart.subtotal;
            if (cart.summary_count > 0) {
                this.renderCustomInfo();
            }
        },
        renderCustomInfo() {
            this.element.html(`<p class="custom-checkout-info">Cart ${this.options.summary_count} product(s) for the amount of ${this.options.subtotal}</p>`);
            $('.custom-checkout-info').css({
                'text-align': 'center',
                'font-size': '32px',
                'font-weight': 'bold'
            })
        }
    })

    return $.perspective.customCheckoutInfo;
});
