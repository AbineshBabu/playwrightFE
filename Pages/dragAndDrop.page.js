exports.DragAndDrop = class DragAndDrop {
    constructor() {
        this.page = global.page;

        this.dragElementOne = this.page.locator('strong:has-text("Item 1:-")');
        this.dragElementTwo = this.page.locator('strong:has-text("Item 5:-")');
    }
}