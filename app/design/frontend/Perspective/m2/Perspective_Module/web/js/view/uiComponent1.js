define(['uiComponent', 'mage/translate', 'ko'], (uiComponent, $t, ko) => {
    return uiComponent.extend({
        defaults: {
            template: 'Perspective_Module/uiComponent1',
            textTranslated: $t('textTranslated from uiComponent1.js'),
            textObservable: ko.observable('textObservable from uiComponent1.js'),
            text: 'text from uiComponent1.js',
            tracks: {
                text: true
            }
        },

        initialize() {
            this._super();

            setTimeout(()=>{
                this.textObservable('update textObservable');
                this.text = 'update text';
            }, 2000)
        }
    });
})

// Debug uiComponents за допомогою uiRegistry
// можно прямо в браузері в консолі писати:
// require('uiRegistry').get(component => console.log(component.name));
// тут name виводить повну назву компоненту з children (parent.child1.child2)
// замість name можна вказати index, тоді буде тільки аліас компоненту (parent, child1, ...)
// після чого можна за допомогою require('uiRegistry').get('name') отримати компонент
// або за аліасом require('uiRegistry').get('index = child2')
// також можна отримати значення змінної require('uiRegistry').get('index = child2').text
// та змінювати його require('uiRegistry').get('index = child2').text = 'new text'
// або якщо функціональний обсерв require('uiRegistry').get('index = child2').text('new text')
// uiRegistry використовують для дебагу
