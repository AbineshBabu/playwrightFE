exports.ListBox = class ListBox {
    constructor() {
        this.page = global.page;

        this.leftWindow = this.page.locator('#list1');
        this.firstElementLeft=this.page.locator('#list1 > option:nth-child(1)');
        this.firstElementRight=this.page.locator('#list2 > option:nth-child(1)')
        this.rightWindow = this.page.locator('#list2');

        this.add = this.page.locator('#add');
        this.addAll = this.page.locator('#addAll');
        this.remove = this.page.locator('#remove');
        this.removeAll = this.page.locator('#removeAll');

    }
}

