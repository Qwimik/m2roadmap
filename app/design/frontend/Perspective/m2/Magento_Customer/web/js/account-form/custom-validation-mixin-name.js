define(['jquery', 'mage/translate', 'jquery/ui', 'jquery/validate'], ($, $t) => {
    return function (targetWidget) {
        $.validator.addMethod(
            'custom-validate-name',
            (value) => /^[a-zA-Z\-]+$/.test(value),
            $t('Firstname or Lastname can contain only Latin letters and -')
        );
        return targetWidget;
    }
});
