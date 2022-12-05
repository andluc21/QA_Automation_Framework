const {Builder, By, until} = require('selenium-webdriver');
const assert = require("assert");
require("dotenv").config();
const requestUrl = process.env.DEV_UI_ENDPOINT;

describe('Google Search', function() {
  let driver;

  before(function() {
    driver = new Builder().forBrowser('chrome').build();
  });

  it('Searching for the term "webdriver" returns no results', async function theTestFunction() {
    await driver.get(`${requestUrl}`);                   
    await driver.findElement(By.id('mh-search-input')).sendKeys('webdriver');  
    let searchButton = await driver.findElement(By.className('mh-search-btn mh-search-submit'));
    await searchButton.click();

    let resultMessage = await driver.findElement(By.xpath('//*[@class="zero-results-extended-general-frame-text"]'));
    let resultValue = await resultMessage.getText();
    assert.equal('Sorry, there are no results for "webdriver"', resultValue);

    let inputMessage = await driver.findElement(By.xpath('//*[@class="zero-results-extended-general-frame-text-keyword"]'));
    let inputValue = await inputMessage.getText();
    assert.equal('webdriver', inputValue);

  });

  after(function() {
    driver.quit();
  });
});