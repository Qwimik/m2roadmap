// jquery-ui-modules/widget - додаємо у залежності, щоб не отримати помилку "$.widget in not define"
define(['jquery', 'jquery-ui-modules/widget'], ($) => {
    // створюємо новий віджет, де 1-й елемент - це namespace.widgetName, 2-й - об'єкт (сам віджет)
   $.widget('perspective.customJquery1', {
       // можимо додатково створювати змінні у options, які будуть перезаписуватись при ініціалізації віджету
       options: {
           customText: 'text from custom-jquery1.js / options'
       },
        // є два методи _create() та init()
       _create() {
           // цей метод відпрацьовує 1 раз при першому виклику віджету
           console.log('create');
           // config - можна отримати за допомогою this.options, а element - this.element (який вже jquery object)
           //console.log('this.options: ', this.options);
           //console.log('this.element: ', this.element);

           console.log(this.options.customText);
       },

       _init() {
           // цей метод відпрацьовує кожен раз при виклику віджету
           // частіше та краще використовувати init метод
           console.log('init');
       }

   });

   // обов'язково повертаємо його у вигляді $.namespace.widgetName;
   return $.perspective.customJquery1;
});
