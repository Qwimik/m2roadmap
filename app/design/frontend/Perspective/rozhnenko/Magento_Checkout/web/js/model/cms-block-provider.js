define(['uiElement'], uiElement => {
    return uiElement.extend({
        defaults: {
            cmsBlocks: '',
            parsedCmsBlocks: {}
        },

        initialize() {
            this._super();

            try {
                this.parsedCmsBlocks = JSON.parse(this.cmsBlocks);
            } catch (error) {
                console.error(error);
            }
        },

        getChildHtml(blockId = '') {
            return !arguments.length ? this.parsedCmsBlocks : this.parsedCmsBlocks[blockId] ?? '';
        }
    })
});
