const {Builder, By, until} = require('selenium-webdriver');
require("dotenv").config();
const requestUrl = process.env.DEV_UI_ENDPOINT;

describe('Adds laptop item to dell cart', function() {
  let driver;

  beforeEach(() => {
    driver = new Builder().forBrowser('chrome').build();
  });

  it('Filters laptops by selection and successfully identifies the first laptop', async function addItemToCart() {
    
    await driver.get(`${requestUrl}`);   
    
    let laptopsLink = await driver.findElement(By.className('hpg-cat-item-wrap dds__px-2'));
    await driver.wait(until.elementIsVisible(laptopsLink),3000);
    await laptopsLink.click();

    let laptopsCategory = await driver.findElement(By.id('refinement-37868'));
    await driver.wait(until.elementIsVisible(laptopsCategory),3000);
    await laptopsCategory.click();

    let laptopTitle = await driver.wait(until.elementIsVisible(driver.findElement(By.css('h3.ps-title > a'))), 10000);
    let laptopTitleText = await laptopTitle.getText();
    expect(laptopTitleText).toEqual('XPS 13 Laptop');

  });

  afterEach(() => {
    driver.quit();
  });
});