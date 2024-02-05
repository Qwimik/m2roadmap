// render child element from file with uiEvents
define(['uiCollection', 'uiLayout', 'uiEvents'], (uiCollection, uiLayout, uiEvents) => {
    return uiCollection.extend({
        defaults: {
            template: 'Perspective_Module/uiComponent-parent'
        },

        initialize() {
            this._super();

            uiEvents.on('childRender', this.onChildRender.bind(this));
        },

        addChild() {
            uiLayout([{
                parent: this.name,
                name: `child-${new Date().getTime()}`,
                component: 'Perspective_Module/js/view/uiComponentChild',
                template: 'Perspective_Module/uiComponent-child'
            }]);
        },
        onChildRender(child) {
            console.log(child);
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
