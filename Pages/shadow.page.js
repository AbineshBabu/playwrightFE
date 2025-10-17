exports.ShadowDOM=class ShadowDOM{
    constructor(){
        this.page=global.page;

        this.insideShadowDom=this.page.locator('#shadow-host  .box');
    }
}