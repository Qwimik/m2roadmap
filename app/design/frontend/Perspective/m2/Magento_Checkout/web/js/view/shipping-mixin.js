define([
    'ko',
    'Magento_Customer/js/model/customer',
    'Magento_Checkout/js/model/quote',
    'Magento_Checkout/js/model/step-navigator'
], (
    ko,
    customer,
    quote,
    stepNavigator
) => {
    return Shipping => {
        return Shipping.extend({
            defaults: {
                visible: ko.observable(!quote.isVirtual() && customer.isLoggedIn()),
                listens: {
                    visible: 'onVisibleUpdate'
                }
            },

            navigate() {
                return customer.isLoggedIn() ? this._super() : this.navigateTotAuthStep();
            },

            navigateTotAuthStep() {
                stepNavigator.setHash('auth');
            },

            onVisibleUpdate(visible) {
                if (!visible || customer.isLoggedIn()) {
                    return this;
                }
                setTimeout(this.navigateTotAuthStep, 500);
            }
        })
    }
})
