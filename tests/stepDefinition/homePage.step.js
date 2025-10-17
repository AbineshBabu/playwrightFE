const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { pages } = require('../../Pages/page.config');

Given('the user navigates to the home page of the application', async function () {
    await page.goto('/index.php');

    console.log("user navigated to home page");
    await pages.homePage().page.waitForTimeout(2000);

});

Then('the user clicks on the {string} button', async function (value) {
    console.log("user clicks on the checkbox");
    await pages.homePage().getElement(value).click();
    await pages.homePage().page.waitForTimeout(2000);

});


Then('the user verify checkbox functionality', async function () {
    console.log("user checks the checkbox functionality");

    await pages.checkBox().singleCheckBox.click();

    await expect(pages.checkBox().singleCheckBox).toBeChecked();

    await expect(pages.checkBox().singleCheckBoxText).toContainText('checked');

});


Then('the user verify radio button functionality', async function () {
    console.log("user checks the radio button functionality");

    await pages.radioButton().maleRadioButton.check();

    await expect(pages.radioButton().maleRadioButton).toBeChecked();

});

Then('the user verify dropdown functionality', async function () {
    console.log("user checks the drop down functionality");

    await pages.dropDown().singleOption.selectOption('Apple');
    await expect(pages.dropDown().singleOption).toHaveValue('Apple');

});


Then('the user verify form functionality', async function () {
    console.log("user checks the form functionality");

    await pages.form().firstName.fill('test');
    await pages.form().middleName.fill('test');
    await pages.form().lastName.fill('test');
    await pages.form().email.fill('test@yopmail.com');
    await pages.form().password.fill('Abinesh@1234');
    await pages.form().address.fill('yes testing');
    await pages.form().city.fill('test');
    await pages.form().state.fill('test');
    await pages.form().pinCode.fill('625009');
    await pages.form().formSubmit.click();

    await expect(pages.form().formMessage).toHaveText('Form submitted successfully');
});

Then('the user verify webTable functionality', async function () {
    console.log("user checks the webtable functionality");
    var searchvalue = "USA";

    await pages.webTable().search.fill(searchvalue);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(5000);

    await expect(pages.webTable().result(searchvalue)).toHaveText(searchvalue);
});


Then('the user verify iframe functionality', async function () {
    console.log("user checks the iframe functionality");

    await expect(pages.iframe().iFram1ClickMe).toHaveText('CLick Me');

});



Then('the user verify shadowdom functionality', async function () {
    console.log("user checks the shadowdom functionality");

    await expect(pages.shadowDOM().insideShadowDom).toHaveText('Hello from Shadow DOM!');
});


Then('the user verify drag and drop functionality', async function () {
    console.log("user checks the drag and drop functionality");

    await pages.dragAndDrop().dragElementOne.dragTo(pages.dragAndDrop().dragElementTwo);

    const strong = await pages.dragAndDrop().dragElementOne;
    const index = await strong.evaluate(el => {
        const li = el.closest('li');              // find the <li> that contains this <strong>
        return Array.from(li.parentNode.children) // list of <li> children of the <ul>
            .indexOf(li);                         // index of this <li>
    });


    await expect(index).toBe(3); // Because when moving to Item5:-, it move only till 4 (Item4:-), i.e 3
});

Then('the user verify JS alert functionality', async function () {
    console.log("user checks the alert functionality");

    page.on('dialog', async dialog=>{
        const type=dialog.type();
        const message=dialog.message();

        if (type == 'alert') {
            expect(message).toBe('This is an alert message!');
            await dialog.accept();
        }
        else if(type == 'confirm'){
            expect(message).toBe('Do you confirm this action?');
            await dialog.dismiss();

        }
        else if(type == 'prompt'){
            expect(message).toBe('What is your name?');
            await dialog.accept('Abi');
        }
    })

    await pages.jsAlert().alert.click();
    await pages.jsAlert().confirm.click();
    await pages.jsAlert().prompt.click();
});


Then('the user verify modal popup functionality', async function () {
    console.log("user checks the modal popup functionality");

    await pages.modal().successmodalPopup.click();

    // await pages.modal().openedModal.waitFor({state:'visible'});

    await expect(pages.modal().openedModal).toHaveText('Modal Popup Body');
});



Then('the user verify file upload functionality', async function () {
    console.log("user checks the file upload functionality");

    await pages.fileUpload().browseFile.setInputFiles('file_Upload.png');

    const uploadInfo= await pages.fileUpload().fileInfo.textContent();

    expect(uploadInfo.includes('file_Upload.png')).toBeTruthy();

});



Then('the user verify file download functionality', async function () {
    console.log("user checks the file download functionality");
    const downloadPromise = page.waitForEvent('download');

    await pages.fileDownload().textArea.fill('test');
    await pages.fileDownload().GenerateFile.click();


    await pages.fileDownload().downloadFile.click();

    const download = await downloadPromise;

    const suggestedFilename = download.suggestedFilename();
    console.log('Downloading:', suggestedFilename); // prints the downloaded file name

    expect(download).not.toBeNull(); // verify if the download object contains value, it only contains values when successfully a file is downloaded

});


Then('the user verify slider functionality', async function () {
    console.log("user checks the slider functionality");

    await pages.slider().slider1.fill('99');

    expect(await pages.slider().value1.textContent()).toBe('99');
});


Then('the user verify list box functionality', async function () {
    console.log("user checks the list box  functionality");

    const leftWindowSelectedElement= await pages.listBox().firstElementLeft.textContent();
    
    await pages.listBox().leftWindow.selectOption({index:0});

    await pages.listBox().add.click();

    const rightWindowAddedText=await pages.listBox().rightWindow.allInnerTexts();

    expect(rightWindowAddedText).toContain(leftWindowSelectedElement)

});


