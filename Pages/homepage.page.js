exports.HomePage = class HomePage {
    constructor(){
        this.button= page.locator();
        this.page=global.page;

        this.checkbox =this.page.getByText("CheckBox").nth(1);
        this.radioButton =this.page.getByText("Radio Button").nth(1);
        this.dropDown =this.page.getByText("Drop Down").nth(0);
        this.form =this.page.getByText("Form").nth(1);
        this.webTable =this.page.getByText("Web Table").nth(1);
        this.iFrame =this.page.getByText("iFrame").nth(1);
        this.shadowDom =this.page.getByText("Shadow Dom").nth(1);
        this.dragAndDrop =this.page.getByText("Drag & Drop").nth(1);
        this.notification =this.page.getByText("Notification ").nth(1);
        this.alerts =this.page.getByText("Alerts").nth(0);
        this.fileUpload =this.page.getByText("File Upload").nth(1);
        this.fileDownload =this.page.getByText("File Download").nth(1);
        this.modalPopup =this.page.getByText("Modal Popup").nth(0);
        this.listBox =this.page.getByText("List Box").nth(1);
        this.slider =this.page.getByText("Slider").nth(1);


        this.elementMap = {
            'checkbox': this.checkbox,
            'check box': this.checkbox,
            'check-box': this.checkbox,
            'radio button': this.radioButton,
            'radio-button': this.radioButton,
            'radiobutton': this.radioButton,
            'drop down': this.dropDown,
            'dropdown': this.dropDown,
            'drop-down': this.dropDown,
            'form': this.form,
            'web table': this.webTable,
            'webtable': this.webTable,
            'web-table': this.webTable,
            'iframe': this.iFrame,
            'i-frame': this.iFrame,
            'shadow dom': this.shadowDom,
            'shadowdom': this.shadowDom,
            'shadow-dom': this.shadowDom,
            'drag and drop': this.dragAndDrop,
            'drag&drop': this.dragAndDrop,
            'drag-drop': this.dragAndDrop,
            'notification': this.notification,
            'alerts': this.alerts,
            'file upload': this.fileUpload,
            'file-upload': this.fileUpload,
            'fileupload': this.fileUpload,
            'file download': this.fileDownload,
            'file-download': this.fileDownload,
            'filedownload': this.fileDownload,
            'modal popup': this.modalPopup,
            'modal-popup': this.modalPopup,
            'modalpopup': this.modalPopup,
            'list box': this.listBox,
            'list-box': this.listBox,
            'listbox': this.listBox,
            'slider': this.slider
        };

    }

    getElement(elementName) {
        const normalizedKey = elementName.toLowerCase().trim();
        const element = this.elementMap[normalizedKey];
        
        if (!element) {
            throw new Error(`Element "${elementName}" not found in elementMap. Available elements: ${Object.keys(this.elementMap).join(', ')}`);
        }
        
        return element;
    }
    
}