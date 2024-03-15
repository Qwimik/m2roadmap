define([
    'uiCollection',
    'Magento_Checkout/js/model/step-navigator',
    'ko',
    'mage/translate',
    'Magento_Customer/js/model/customer',
    'Magento_Checkout/js/auth-form',
    'mage/tabs'
], (
    uiCollection,
    stepNavigator,
    ko,
    $t,
    customer,
    authForm
) => {
    return uiCollection.extend({
        defaults: {
            template: 'Magento_Checkout/auth-step',
            isVisible: ko.observable(!customer.isLoggedIn()),
            code: 'auth',
            title: $t('Sing In')
        },
        initObservable() {
            this._super();
            stepNavigator.steps.subscribe(this.onStepsUpdate.bind(this));
            return this;
        },
        initialize() {
            this._super();

            stepNavigator.registerStep(
                this.code,
                null,
                this.title,
                this.isVisible,
                this.navigate.bind(this),
                this.sortOrder
            );

            return this;
        },
        loadAuthForm(){
            authForm.renderRegisterTemplate();
        },
        navigate(step) {
            return step && step.isVisible(true);
        },
        next() {
            stepNavigator.next();
        },
        onStepsUpdate(steps) {
            if (!this.isVisible() || steps.length < 3 || !customer.isLoggedIn()) {
                return this;
            }
            this.next();
        }
    });
});
