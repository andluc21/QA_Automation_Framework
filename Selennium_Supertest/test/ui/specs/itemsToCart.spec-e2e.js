const {Builder, By, until} = require('selenium-webdriver');
require("dotenv").config();
const requestUrl = process.env.DEV_UI_ENDPOINT;

describe('Adds laptop item to dell cart', function() {
  let driver;

  beforeEach(() => {
    driver = new Builder().forBrowser('chrome').build();
  });

  it('Filters laptops by selection and successfully adds 1 item to the cart', async function addItemToCart() {
    
    await driver.get(`${requestUrl}`);   
    
    let laptopsLink = await driver.findElement(By.className('hpg-cat-item-wrap dds__px-2'));
    await driver.wait(until.elementIsVisible(laptopsLink),3000);
    await laptopsLink.click();

    let laptopsCategory = await driver.findElement(By.id('refinement-37868'));
    await driver.wait(until.elementIsVisible(laptopsCategory),3000);
    await laptopsCategory.click();

    let specificLaptop = await driver.findElement(By.className('ps-image-area'));
    await driver.wait(until.elementIsVisible(specificLaptop),3000);
    await specificLaptop.click();

    let addToCart = await driver.findElement(By.className('btn btn-success dellmetrics-browseconfig atc-cta-mfe rounded-sm'));
    await driver.wait(until.elementIsVisible(addToCart),3000);
    await addToCart.click();

    let resultMessage = await driver.findElement(By.className('cart mh-flyout-link'));
    let resultValue = await resultMessage.getAttribute("cart-count-label")
    expect(resultValue).toEqual('{0} {1} in your cart.');

  });

  afterEach(() => {
    driver.quit();
  });
});