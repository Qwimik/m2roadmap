define(['mage/utils/wrapper'], (wrapper) => {
    return function (originalObject) {
        // можна розширювати оригінальний об'єкт
        originalObject.newMethod = function () {
            console.log('console.log from newMethod in custom-object-mixin')
        };
        // можна перевизначати існуючи методи за допомогою wrapSuper
        originalObject.getData = wrapper.wrapSuper(originalObject.getData, function () {
            // записуємо в змінну arr значення виконання оригінального методу, прокинувши нові arg1, arg2
            const arr = this._super('arg1 new', 'arg2 new');
            arr.push('arg3 new');

            return arr;
        });
        return originalObject;
    }
});
