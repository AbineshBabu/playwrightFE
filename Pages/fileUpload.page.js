exports.FileUpload = class FileUpload{
    constructor(){
        this.page=global.page;

        this.browseFile=this.page.locator('input[id="fileInput"]');
        this.fileInfo=this.page.locator('#fileInfo');
    }
}