define(['jquery', 'mage/translate'], ($, $t) => {
    return function (targetWidget) {
        $.validator.addMethod(
            'custom-validate-email',
            (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
            $t('Incorrect email, example: myemail@mail.com')
        );

        return targetWidget;
    }
});
