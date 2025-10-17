exports.FileDownload = class FileDownload{
    constructor(){
        this.page=global.page;

        this.textArea=this.page.locator('#textInput');
        this.GenerateFile=this.page.locator('button:has-text("Generate File")');
        this.downloadFile=this.page.locator('#downloadLink');
    }
}