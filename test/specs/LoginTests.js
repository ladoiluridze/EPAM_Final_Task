// test/specs/LoginTests.js
const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/LoginPage');
const DashboardPage = require('../pageobjects/DashboardPage');
const assert = require('chai').assert;

describe('SauceDemo Login', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    it('should display error message for empty credentials', async () => {
        await LoginPage.login('test', 'test');
        await LoginPage.clearInputs();
        await LoginPage.btnLogin.click();
        assert.equal(LoginPage.errorMessage.getText(), 'Epic sadface: Username is required');
    });

    it('should display error message for missing password', async () => {
        await LoginPage.inputUsername.setValue('test');
        await LoginPage.inputPassword.setValue('test');
        await LoginPage.inputPassword.clearValue();
        await LoginPage.btnLogin.click();
        assert.equal(LoginPage.errorMessage.getText(), 'Epic sadface: Password is required');
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        assert.isTrue(DashboardPage.isTitleDisplayed(), 'Swag Labs');
    });
});
