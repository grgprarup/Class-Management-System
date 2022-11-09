const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");

const studentButton = '//div[contains(@class,"submenuitems") and text()="Student"]'
const studentAddButton = '//a[contains(@href, "admin/student/add")]'
const formTitle = '//div[contains(@class,"open-menu") and text()="Add Student"]'

Given('Admin has opened Add Student Form', async function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    page.click(studentButton)
    page.click(studentAddButton)
    await expect(page.locator(formTitle)).toBeVisible()
  });
