exports.CheckBox = class CheckBox{
    constructor(){
        this.page=global.page;

        this.singleCheckBox =this.page.locator('#myCheckbox');
        this.singleCheckBoxText=this.page.locator('.card-tools #message');
    }
}