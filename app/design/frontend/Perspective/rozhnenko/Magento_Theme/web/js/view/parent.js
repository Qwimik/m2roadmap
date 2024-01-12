//============== Variant with uiEvents in child ==============
define(['uiCollection', 'uiLayout', 'uiEvents'], (uiCollection, uiLayout, uiEvents) => {
    'use strict'

    return uiCollection.extend({
        defaults: {
            template: 'Magento_Theme/parent',
            // provider: 'custom',
            // test: '${ $.provider }:data.items',
            // ignoreTmpls: {
            //     test: true,
            // }
        },

        initialize() {
            this._super();
            uiEvents.on('childRender', this.onChildRender.bind(this));
        },

        addChild() {
            uiLayout([{
                parent: this.name,
                name: `child-${new Date().getTime()}`,
                component: 'Magento_Theme/js/view/child',
                template: 'Magento_Theme/child',
                displayArea: this.elems.getLength() % 2 ? 'right' : 'left',
            }]);
        },

        onChildRender(child) {
            console.log(child);
        }
    })
})

//============== Variant without uiEvents in child ==============
// define(['uiCollection', 'uiLayout'], (uiCollection, uiLayout) => {
//     'use strict'
//
//     return uiCollection.extend({
//         defaults: {
//             template: 'Magento_Theme/parent'
//         },
//         timer: null,
//
//         addChild() {
//             const name = `child-${new Date().getTime()}`;
//
//             uiLayout([{
//                 parent: this.name,
//                 name,
//                 component: 'uiElement',
//                 template: 'Magento_Theme/child'
//             }]);
//
//             if (this.timer) clearInterval(this.timer);
//
//             this.timer = setTimeout(()=>{
//                 const child = this.getChild(name);
//                 console.log(child);
//
//                 if(child) clearInterval(this.timer);
//             }, 100)
//         }
//     })
// })
