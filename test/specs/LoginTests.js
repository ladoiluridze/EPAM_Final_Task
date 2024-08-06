const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/LoginPage');
const DashboardPage = require('../pageobjects/DashboardPage');
const {validCredentials, invalidCredentials, errorMessages, pageTitle} = require("../data/testData")

describe('SauceDemo Login', () => {
    beforeEach( () => {
         LoginPage.open();
    });

    it('should display error message for empty credentials', async () => {
        await LoginPage.login(invalidCredentials.username, invalidCredentials.password);
        await LoginPage.clearInputs();
        await LoginPage.btnLogin.click();
        const errorMsg = await LoginPage.errorMessage.getText();
        expect(errorMsg).toContain(errorMessages.emptyUsernamePassword);
    });

    it('should display error message for missing password', async () => {
        await LoginPage.login(invalidCredentials.username, invalidCredentials.password);
        await LoginPage.clearInputs();
        await LoginPage.btnLogin.click();
        const errorMsg = await LoginPage.errorMessage.getText();
        expect(errorMsg).toContain(errorMessages.emptyPassword);        
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login(validCredentials.username, validCredentials.password);
        const isTitleDisplayed = await DashboardPage.title.getText();
        await expect(isTitleDisplayed).toBe(pageTitle.title);
    });
});
