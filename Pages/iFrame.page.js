exports.IFrame= class IFrame{
    constructor(){
        this.page=global.page;

        this.iFram1=this.page.frameLocator('iframe[name="iframe1"]');
        this.iFram1ClickMe=this.iFram1.locator('button:has-text("CLick Me")');
    }
}