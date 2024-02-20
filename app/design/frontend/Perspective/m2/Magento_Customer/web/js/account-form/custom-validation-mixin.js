define(['jquery', 'mage/translate'], ($, $t) => {
    return function (targetWidget) {
        $.validator.addMethod(
            'validate-phone-number',
            (value) => /^\+?3?8?(0\d{9})$/.test(value),
            $t('Please enter correct ukrainian number, which starts with "+380*", "380*", "0*"')
        );
        $.validator.addMethod(
            'validate-firstname',
            (value) => /^[a-zA-Z]+$/.test(value),
            $t('First name can contain only Latin letters')
        )

        return targetWidget;
    }
});
