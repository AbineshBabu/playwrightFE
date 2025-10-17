exports.JSAlert = class JSAlert {
    constructor() {
        this.page = global.page;

        this.alert = this.page.locator('button:has-text("Show Alert")');
        this.confirm = this.page.locator('button:has-text("Show Confirm")');
        this.prompt = this.page.locator('button:has-text("Show Prompt")');

    }
}