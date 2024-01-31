// приклад використання функціональних обсервів, які у нативному knockout
// в цьому прикладі у html темплейті ми використовуємо if: !isActive() (як виклик методу, 3 параграф)
// define(['uiComponent', 'ko'], (uiComponent, ko) => {
//     return uiComponent.extend({
//         // defaults - змінні (заглушки), які можуть бути перевизначенні у phtml (у phtml більший пріоритет)
//         defaults: {
//             template: 'Perspective_Module/uiComponent3',
//             // приклад змінних у вигляді обсервів
//             isActive: ko.observable(true),
//             text: ko.observable('text from uiComponent3.js'),
//             items: ko.observableArray(['item', 'item', 'item'])
//         },
//
//         // якщо ми передаємо змінну в phtml, треба зробити її обсервом
//         // initObservable() спрацьовує раніше initialize()
//         initObservable() {
//             this._super();
//
//             // варіант 1 - зробити змінну обсервом
//             // this.text = ko.observable(this.text);
//
//             // варіант 2 this.observe() - приймає змінну як рядок, або масив рядків ['text', '...', '...', ...], якщо змінних декілька
//             this.observe('text');
//
//             return this;
//         },
//
//         initialize() {
//             this._super();
//
//             setTimeout(()=> {
//                 this.isActive(false);
//                 this.text('new text after setTimeout()');
//                 this.items.push('item');
//             }, 3000);
//         }
//     });
// })
//======================================================================================================================
//======================================================================================================================
//======================================================================================================================
define(['uiComponent', 'ko'], (uiComponent, ko) => {
    return uiComponent.extend({
        defaults: {
            template: 'Perspective_Module/uiComponent3',
            text: 'text from uiComponent3.js',
            isActive: true,
            items: ['item', 'item', 'item'],
            // якщо змінні передаємо, як звичайні типи (не обсерви), то потрібен tracks,
            // в який передаємо ключи які хочемо зробити обсервами:
            tracks: {
                text: true,
                isActive: true,
                items: true
            }
        },

        initObservable() {
            this._super();

            // те саме що і tracks у defaults, але інший спосіб
            // true - перший аргумент this.observe вказує на tracks
            // this.observe(true, [
            //     'text',
            //     'isActive',
            //     'items'
            // ]);

            // і ще те саме, 3-й спосіб
            // this.track(['text', 'isActive', 'items']);

            return this;
        },

        initialize() {
            this._super();

            setTimeout(()=> {
                this.isActive = false;
                this.text = 'new text after setTimeout()';
                this.items.push('item');
            }, 3000);
        }
    });
})
