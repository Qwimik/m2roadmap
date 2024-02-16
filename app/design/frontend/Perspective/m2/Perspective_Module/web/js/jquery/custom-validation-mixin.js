// створюємо міксин на віджет валідації та додаємо власні методи(умови) та свої сповіщення про помилки валідації
define(['jquery', 'mage/translate'], ($, $t) => {
    return function (targetWidget) {
        $.validator.addMethod(
            'validate-phone-number',
            (value) => /^\+?3?8?(0\d{9})$/.test(value),
            $t('Please enter correct ukrainian number, which starts with "+380*", "380*", "0*"')
        );

        return targetWidget;
    }
});
