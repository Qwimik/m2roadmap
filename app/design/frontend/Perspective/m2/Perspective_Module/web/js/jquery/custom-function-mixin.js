define(['mage/utils/wrapper'], (wrapper) => {
    return function (extendedFunction) {
        return wrapper.wrap(extendedFunction, function (originalFunction, config, element) {
            // викликаємо оригінальну функцію в потрібному місці, обов'язково передаємо всі аргументи які були в оригінальній функції!
            originalFunction(config, element);
            console.log('console.log from mixin');
            console.log('config from mixin: ', {
                ...config,
                b: 2
            });
        });
    };
});
