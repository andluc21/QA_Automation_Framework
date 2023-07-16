const {Builder, By} = require('selenium-webdriver');
require("dotenv").config();
const requestUrl = process.env.DEV_UI_ENDPOINT;

describe('Searching for Results on Dell', function() {
  let driver;

  beforeEach(() => {
    driver = new Builder().forBrowser('chrome').build();
  });

  it('Searching for the term "inspiron 16 laptop" returns results', async function searchValidResult() {
    await driver.get(`${requestUrl}`);                   
    await driver.findElement(By.id('mh-search-input')).sendKeys('inspiron 16 laptop');  
    let searchButton = await driver.findElement(By.className('mh-search-btn mh-search-submit'));
    await searchButton.click();

    let resultMessage = await driver.findElement(By.css('.dds__col--lg-6.search-pageinfo-smalldevices .pageinfo'));
    let resultValue = await resultMessage.getAttribute('innerText');

    // Assert the expected result value
    expect(resultValue).toContain("Showing 1 - 12 of 149 results for 'inspiron 16 laptop'");
  });

  it('Searching for the term "webdriver" returns no results', async function searchNoResult() {
    await driver.get(`${requestUrl}`);                   
    await driver.findElement(By.id('mh-search-input')).sendKeys('webdriver');  
    let searchButton = await driver.findElement(By.className('mh-search-btn mh-search-submit'));
    await searchButton.click();

    let resultMessage = await driver.findElement(By.xpath('//*[@class="zero-results-extended-general-frame-text"]'));
    let resultValue = await resultMessage.getText();
    
    // Assert the expected result value
    expect(resultValue).toEqual('Sorry, there are no results for "webdriver"');

    // await new Promise((resolve) => setTimeout(resolve, 1100500)); // Pause 
  });

  afterEach(() => {
    driver.quit();
  });
});