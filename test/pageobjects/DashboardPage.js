// test/pageobjects/DashboardPage.js
const { $ } = require('@wdio/globals')

const Page = require('./Page');

class DashboardPage extends Page {
    get title() { return $('//span[@class="title"]'); }

    isTitleDisplayed() {
        return this.title.isDisplayed();
    }
}

module.exports = new DashboardPage();