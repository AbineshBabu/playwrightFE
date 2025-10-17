exports.Form = class Form{
    constructor(){
        this.page= global.page;

        this.firstName=this.page.locator('input[name="firstname"]');
        this.middleName=this.page.locator('input[name="middlename"]');
        this.lastName=this.page.locator('input[name="lastname"]');
        this.email=this.page.locator('input[name="email"]');
        this.password=this.page.locator('input[name="password"]');
        this.address=this.page.locator('textarea[name="address"]');
        this.city=this.page.locator('input[name="city"]');
        this.state=this.page.locator('input[name="states"]');
        this.pinCode=this.page.locator('input[name="pincode"]');
        this.formSubmit=this.page.locator('button:has-text("Submit")')
        this.formMessage=this.page.locator('#message').nth(0);
    }
}