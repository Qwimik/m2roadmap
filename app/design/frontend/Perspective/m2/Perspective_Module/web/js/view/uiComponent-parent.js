// render child element from file with uiEvents
define(['uiCollection', 'uiLayout', 'uiEvents'], (uiCollection, uiLayout, uiEvents) => {
    return uiCollection.extend({
        defaults: {
            template: 'Perspective_Module/uiComponent-parent',
            var1: 'value var1',
            // оголошення літералів в компонентах за допомогою '' або "" не як зазвичай `` - це буде помилкою
            // якщо замість $ в {} підставити this - буде undefined
            var2: '${$.var1}'
        },

        initialize() {
            this._super();

            // підписуємось на event 'childRender' і викликаємо метод onChildRender і прив'язуємо контекст this
            uiEvents.on('childRender', this.onChildRender.bind(this));

            //console.log('var1: ', this.var1);
            //console.log('var2: ', this.var2);
        },

        addChild() {
            uiLayout([{
                parent: this.name,
                name: `child-${new Date().getTime()}`,
                component: 'Perspective_Module/js/view/uiComponentChild',
                template: 'Perspective_Module/uiComponent-child',
                // з використанням getRegion() у html темплейті
                // для прикладу зробимо 2 регіони (left, right) і для наглядності рендеримо за умовою
                displayArea: this.elems.getLength() % 2 ? 'right' : 'left'
            }]);
        },
        onChildRender(child) {
            //console.log('child.name: ', child.name);
        }
    });
});

// uiCollection, uiLayout
// define(['uiCollection', 'uiLayout'], (uiCollection, uiLayout) => {
//     return uiCollection.extend({
//         defaults: {
//             template: 'Perspective_Module/uiComponent-parent'
//         },
//         timer: null,

        // створення нового child component всередені parent component
        // приклад, який показує, що this.getChild(name); відбувається синхронно, до uiLayout(який асинхронний),
        // через що child завжди буде undefined

        // addChild() {
        //     const name = `child-${new Date().getTime()}`;
        //     uiLayout([{
        //         parent: this.name,
        //         name,
        //         component: 'uiElement',
        //         template: 'Perspective_Module/uiComponent-child'
        //     }]);
        //     const child = this.getChild(name);
        //     console.log(child);
        // }

        // інший варіант без uiEvents
//         addChild() {
//             const name = `child-${new Date().getTime()}`;
//             uiLayout([{
//                 parent: this.name,
//                 name,
//                 component: 'uiElement',
//                 template: 'Perspective_Module/uiComponent-child'
//             }]);
//
//             if (this.timer) clearInterval(this.timer);
//
//             this.timer = setInterval(() => {
//                 const child = this.getChild(name);
//                 console.log(child);
//
//                 if (child) clearInterval(this.timer);
//             }, 100);
//         }
//     });
// });
