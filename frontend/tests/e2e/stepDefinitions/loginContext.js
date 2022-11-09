const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");

const url = 'http://localhost:3000'

//define selectors
//const homepageElement = '.borderTodo'
const emailInput = '#email';
const passInput = '#password';
const loginButton = '.login__btn';
const sidemenu='.sidemenu';
const alertmessage='#__react-alert__';
//const loginPage = ""
//const todoItem = '.todo .todo-item ';

Given('Admin has been redirected to login page', async function () {
    await page.goto(`${url}/login/`)
    await expect(page.locator(loginButton)).toBeVisible();
  });

  const commonFunc =async(email,password)=>{
    await page.fill(emailInput,email)
    await page.fill(passInput,password)
    await page.click(loginButton)
  }

  When('Admin logs in with email {string} and password {string} using the webUI', async function (email, password) {
    // Write code here that turns the phrase above into concrete actions
    // await page.fill(emailInput,email)
    // await page.fill(passInput,password)
    // await page.click(loginButton)
    //return 'pending';
    await commonFunc(email,password)
  });

  Then('Admin should be redirected to dashboard page', async function () {
    // Write code here that turns the phrase above into concrete actions
    await expect(page.locator(sidemenu)).toBeVisible();
    //return 'pending';
  });

  Then('Error message {string} should be visible', async function (message) {
    // Write code here that turns the phrase above into concrete actions
    await expect(page.locator(alertmessage)).toContainText(message)
    
  });

  Given('Admin has been logged in with email {string} and password {string} using webUI', async function (email, password) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    await page.goto(`${url}/login/`)
    await commonFunc(email,password)
    await expect(page.locator(sidemenu)).toBeVisible()

  });