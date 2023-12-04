define(['jquery', 'mage/translate'], function($, $t) {
    'use strict';

    return function(targetWidget) {
        $.validator.addMethod(
            'customValidation',
            (value) => /^[ҐґЄєІіЇїа-яА-Я-]+$/.test(value),
            $t('Тільки кирилиця та "-"')
        )
        return targetWidget;
    }
});
