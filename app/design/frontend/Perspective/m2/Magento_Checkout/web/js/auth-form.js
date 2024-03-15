define(['jquery'], function ($) {
    'use strict';

    return {
        renderRegisterTemplate: function () {
            $.ajax({
                url: '/perspectiveregister/index/register',
                type: 'post',
                data: {
                    cart: "yes",
                },
                success: function (res) {
                    $('#registerContainer').html(res);
                },
                error: function (xhr, status, error) {
                    console.error(error)
                }
            })
        }
    };
});
