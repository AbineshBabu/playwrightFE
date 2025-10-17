const { CheckBox } = require("./checkbox.page")
const { DragAndDrop } = require("./dragAndDrop.page")
const { DropDown } = require("./dropDown.page")
const { FileDownload } = require("./fileDownload.page")
const { FileUpload } = require("./fileUpload.page")
const { Form } = require("./form.page")
const { HomePage } = require("./homepage.page")
const { IFrame } = require("./iFrame.page")
const { JSAlert } = require("./jsAlert.page")
const { ListBox } = require("./listBox.page")
const { ModalPopup } = require("./modal.page")
const { RadioButton } = require("./radioButton.page")
const { ShadowDOM } = require("./shadow.page")
const { Slider } = require("./slider.page")
const { WebTable } = require("./webTable.page")


exports.pages={
    homePage(){
        return new HomePage
    },
    checkBox(){
        return new CheckBox
    },
    radioButton(){
        return new RadioButton
    },
    dropDown(){
        return new DropDown
    },
    form(){
        return new Form
    },
    webTable(){
        return new WebTable
    },
    iframe(){
        return new IFrame
    },
    shadowDOM(){
        return new ShadowDOM
    },
    dragAndDrop(){
        return new DragAndDrop
    },
    jsAlert(){
        return new JSAlert
    },
    modal(){
        return new ModalPopup
    },
    fileUpload(){
        return new FileUpload
    },
    fileDownload(){
        return new FileDownload
    },
    slider(){
        return new Slider
    },
    listBox(){
        return new ListBox
    }
}