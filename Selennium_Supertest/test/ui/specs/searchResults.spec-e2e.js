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
  });

  it('Searching for the term "inspiron 16 laptop" returns results', async function theTestFunction() {
    await driver.get(`${requestUrl}`);                   
    await driver.findElement(By.id('mh-search-input')).sendKeys('inspiron 16 laptop');  
    let searchButton = await driver.findElement(By.className('mh-search-btn mh-search-submit'));
    await searchButton.click();

    let resultMessage = await driver.findElement(By.xpath('//*[@class="bc-category-label icon-home"]'));
    let resultValue = await resultMessage.getText();
    assert.equal('Showing results for inspiron 16 laptopin', resultValue);

  });

  after(function() {
    driver.quit();
  });
});