// Mixin uiComponent (у requirejs-config зробили посилання на міксин)
define([], () => {
    return uiComponent4 => {
        return uiComponent4.extend({
            customMethod() {
                this._super();
                console.log('customMethod in uiComponent4-mixin');
            }
        });
    }
});

// uiComponent - використовуємо коли очікуємо, що будуть children
// uiComponent/uiCollection - одне й те саме
// uiElement - якщо children 100% не буде
// uiClass - не використовуємо (структура uiClass->uiElement=>uiComponent/uiCollection)
