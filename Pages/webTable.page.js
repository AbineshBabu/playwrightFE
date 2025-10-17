exports.WebTable = class WebTable{
    constructor(){
        this.page= global.page;

        this.search=this.page.locator('#searchInput');
        this.result=(value)=>{ return this.page.locator(`#dataTable > tbody > tr > td:has-text("${value}")`)}
        // this.result=this.page.locator('#dataTable > tbody > tr > td:has-text("USA")')
        
    }
}