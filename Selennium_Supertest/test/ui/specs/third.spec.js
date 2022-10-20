const {Builder, By, until} = require('selenium-webdriver');

describe('Google Search', function() {
  let driver;

  before(function() {
    driver = new Builder().forBrowser('chrome').build();
  });

  it('example', async function theTestFunction() {
    await driver.get('https://www.dell.com/en-us');                   
    await driver.findElement(By.id('mh-search-input')).sendKeys('webdriver');  
    let searchButton = await driver.findElement(By.className('mh-search-btn mh-search-submit'));
    await searchButton.click();
    await driver.wait(until.elementLocated(By.css('sdfsdfsdfsdf')),100000);
    // let savedVariableExample = await driver.wait(until.elementLocated(By.css('sdfsdfsdfsdf')),100000);
    // await driver.findElement(By.name('btnK')).click();                      // (3)
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);    // (4)
  });

  after(function() {
    driver.quit();
  });
});