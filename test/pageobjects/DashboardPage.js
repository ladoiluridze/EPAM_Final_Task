const { $ } = require('@wdio/globals')

const Page = require('./Page');

class DashboardPage extends Page {
    get title() { return $('//*[@class="app_logo"]'); }

    isTitleDisplayed() {
        return this.title.isDisplayed();
    }
}

module.exports = new DashboardPage();