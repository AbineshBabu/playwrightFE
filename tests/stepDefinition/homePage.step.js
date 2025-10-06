const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const {pages} = require('../../Pages/page.config');

Given('the user navigates to the home page of the application', async function () {
    await page.goto('/index.php');

    console.log("yes p1");
    expect(true).toBeFalsy();
    await pages.homePage().page.waitForTimeout(5000);
    
});

Given('the user navigates to the home page of the application p2', async function () {
    // await page.goto('/index.php');

    console.log("yes p2");
    await pages.homePage().page.waitForTimeout(5000);


});


Given('the user navigates to the home page of the application P3', async function () {
    // await page.goto('/index.php');

    console.log("yes p3");
    await pages.homePage().page.waitForTimeout(5000);


});

