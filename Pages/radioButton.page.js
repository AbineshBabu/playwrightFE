exports.RadioButton = class RadioButton {
    constructor(){
        this.page=global.page;

        this.maleRadioButton =this.page.locator('input[name="gender"][value="Male"]');
    }
}