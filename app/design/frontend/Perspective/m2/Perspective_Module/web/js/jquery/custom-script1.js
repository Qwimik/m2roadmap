define(['jquery', 'Perspective_Module/js/jquery/custom-jquery1'], ($) => {
    return function (config, element) {
        //console.log('config: ', config);
        //console.log('element: ', element);

        // додаємо елементу виклик віджету
        $(element).customJquery1({
            // тут можна перезаисувати змінні з options у віджеті
            customText: 'NEW text from script1, more priority'
        });
    }
});
