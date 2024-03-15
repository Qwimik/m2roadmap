define(['jquery', 'mage/translate'], ($,$t) => {
    return function (targetWidget) {
        $.validator.addMethod(
            'custom-validation-name',
            (value) => /^[a-zA-Z\-]+$/.test(value),
            $t('Firstname or Lastname can contain only Latin letters and \"-\"')
        );
        return targetWidget;
    }
});
