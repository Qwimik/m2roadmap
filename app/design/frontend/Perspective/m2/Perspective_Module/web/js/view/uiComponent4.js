define(['uiComponent', 'ko', 'uiRegistry'], (
    uiComponent,
    ko,
    uiRegistry
) => {
    return uiComponent.extend({
        defaults: {
            template: 'Perspective_Module/uiComponent4',
            // приклад незмінного літералу
            test: '${$.provider}:data.items',
            // provider - для імпорту з конкретного name компоненту
            provider: 'uiComponent2',
            // використання import
            imports: {
                // де textImport - нова назва змінної, uiComponent1 - повний name компоненту звідки беремо змінну, text - змінна, яку витягуємо
                textImport: 'uiComponent1:text',
                textObservableImport: 'uiComponent1:textObservable',
                // за допомогою provider і літералу, можна
                items: '${$.provider}:data.items',
                var1: '${$.provider}:data.var1'
            },
            // ignoreTmpls - заставляє ігнорувати літерали
            // Без ignoreTmpls - console.log(test) - uiComponent2:data.items;
            // З ignoreTmpls - console.log(test) - ${$.provider}:data.items;
            //
            ignoreTmpls: {
                // аналогічно, як в tracks
                test: true
            },
            // ще є links - дозволяє зв'язувати змінні між собою і оновлювати їх в обох місцях одночасно
            // links: {
            //     textImport: 'uiComponent1:text',
            //     textObservableImport: 'uiComponent1:textObservable'
            // },
            // ще є listens - виконує функцію при зміні змінної, коли змінна text в uiComponent1 зміниться, виконається функція onTextUpdate
            // listens: {
            //     'uiComponent1:text': 'onTextUpdate'
                // або змінну з імпорту
                // textImport: 'onTextUpdate'
            // },
            // ще є exports - вказуємо в тому компоненті, з якого хочемо передати змінну
            // де textImport - змінна яку передаємо, uiComponent1 - компонент в який передаємо, text - змінна в іншому компоненті в яку передаємо
            // exports: {
            //     textImport: 'uiComponent1:text'
            // },
            // ще є modules - посилання на компонент
            // де referenceUiComponent1 - локальна змінна, uiComponent1 компонент, який записуємо в змінну
            // те саме що require('uiRegistry').get('name'), але uiRegistry частіше використовують тільки для дебагу
            modules: {
                referenceUiComponent1: 'uiComponent1'
            },
            tracks: {
                textImport: true,
                textObservableImport: true
            }
        },

        initialize() {
            this._super();
            this.customMethod();
            console.log('referenceUiComponent1: ', this.referenceUiComponent1());
            //
            console.log('items: ', this.items);
            console.log('var1: ', this.var1);
            console.log('test: ', this.test);
        },
        customMethod() {
            console.log('original customMethod in uiComponent4');
        }

        // варіант 1 - як витягнути дані з іншого uiComponent та слідкувати за ними
        // initObservable() {
        //     this._super();
        //
        //     const uiComponent1 = uiRegistry.get('uiComponent1');
        //     this.textObservableImport = uiComponent1.textObservable;
        //     // наступний запис буде змінюватись, тому що text - рядок, а не функціональний обсерв
        //     // this.text = uiComponent1.text;
        //     // щоб бачити зміни, можна додати трек та підписатись на змінну:
        //     this.textImport = uiComponent1.text;
        //     this.track('textImport');
        //     ko.getObservable(uiComponent1, 'text').subscribe(
        //         text => {
        //             this.textImport = text;
        //         }
        //     )
        //     return this;
        // }
    });
});

// uiComponent - використовуємо коли очікуємо, що будуть children
// uiComponent/uiCollection - одне й те саме
// uiElement - якщо children 100% не буде
// uiClass - не використовуємо (структура uiClass->uiElement=>uiComponent/uiCollection)
