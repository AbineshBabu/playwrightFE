exports.Slider = class Slider{
    constructor(){
        this.page=global.page;

        this.slider1=this.page.locator('#slider1');
        this.value1=this.page.locator('#value1');
    }
}