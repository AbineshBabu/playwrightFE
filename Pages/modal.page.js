exports.ModalPopup=class ModalPopup{
    constructor(){
        this.page = global.page;

        this.successmodalPopup = this.page.locator('button:has-text("Success Modal Popup")');
        this.openedModal=this.page.locator('#modal-success .modal-content p:has-text("Modal Popup Body")')
    }
}