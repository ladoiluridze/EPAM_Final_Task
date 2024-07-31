// test/pageobjects/Page.js
const { browser } = require('@wdio/globals')

module.exports = class Page {
    open(path) {
        browser.url(`https://www.saucedemo.com/${path}`);
    }
};
