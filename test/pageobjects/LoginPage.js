const Page = require('./Page');

class LoginPage extends Page {
    get inputUsername() { return $('//input[@id="user-name"]'); }
    get inputPassword() { return $('//input[@id="password"]'); }
    get btnLogin() { return $('//input[@id="login-button"]'); }
    get errorMessage() { return $('//h3[@data-test="error"]'); }

    open() {
        return super.open('/');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    async clearInputs() {
        await this.inputUsername.clearValue();
        await this.inputPassword.clearValue();
    }
}

module.exports = new LoginPage();