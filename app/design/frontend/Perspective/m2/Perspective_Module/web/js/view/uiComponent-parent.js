// uiCollection, uiLayout
define(['uiCollection', 'uiLayout'], (uiCollection, uiLayout) => {
    return uiCollection.extend({
        defaults: {
            template: 'Perspective_Module/uiComponent-parent'
        },

        // створення нового child component всередені parent component
        addChild() {
            uiLayout([{
                parent: this.name,
                name: `child-${new Date().getTime()}`,
                component: 'uiElement',
                template: 'Perspective_Module/uiComponent-child'
            }])
        }
    });
});
