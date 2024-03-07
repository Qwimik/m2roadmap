define(['jquery'], ($) => {
    return function (targetWidget) {
        console.log(targetWidget);
        $.validator.addMethod(
            'custom-validation-name',
            function(value,element) {
                console.log(value)
                return /^[a-zA-Z\-]+$/.test(value)
            },
            $.mage.__('Firstname or Lastname can contain only Latin letters and \"-\"')
        );
        return targetWidget;
    }
});
