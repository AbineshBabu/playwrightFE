exports.DropDown = class DropDown{
    constructor(){
        this.page=global.page;

        this.singleOption = this.page.locator('#fruitDropdown');
        
    }
}