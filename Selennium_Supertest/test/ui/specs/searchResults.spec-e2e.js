const {Builder, By} = require('selenium-webdriver');
require("dotenv").config();
const requestUrl = process.env.DEV_UI_ENDPOINT;

describe('Searching for Results on Dell', function() {
  let driver;

  beforeEach(() => {
    driver = new Builder().forBrowser('chrome').build();
  });

  it('Searching for the term "webdriver" returns no results', async function searchNoResult() {
    await driver.get(`${requestUrl}`);                   
    await driver.findElement(By.id('mh-search-input')).sendKeys('webdriver');  
    let searchButton = await driver.findElement(By.className('mh-search-btn mh-search-submit'));
    await searchButton.click();

    let resultMessage = await driver.findElement(By.xpath('//*[@class="zero-results-extended-general-frame-text"]'));
    let resultValue = await resultMessage.getText();
    expect(resultValue).toEqual('Sorry, there are no results for "webdriver"');
  });

  it('Searching for the term "inspiron 16 laptop" returns results', async function searchValidResult() {
    await driver.get(`${requestUrl}`);                   
    await driver.findElement(By.id('mh-search-input')).sendKeys('inspiron 16 laptop');  
    let searchButton = await driver.findElement(By.className('mh-search-btn mh-search-submit'));
    await searchButton.click();

    let resultMessage = await driver.findElement(By.className('bc-category-label icon-home'));
    let resultValue = await resultMessage.getText();
    expect(resultValue).toEqual('Showing results for inspiron 16 laptopin');
  });

  afterEach(() => {
    driver.quit();
  });
});