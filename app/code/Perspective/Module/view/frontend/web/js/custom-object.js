define([], () => {
    return {
        getData(arg1 = 'arg1', arg2 = 'arg2') {
            const arr = [
                'item 1',
                'item 2',
                'item 3'
            ];

            console.log('console.log from custom-object.js: ', arr, arg1, arg2);

            return arr;
        }
    }
});
