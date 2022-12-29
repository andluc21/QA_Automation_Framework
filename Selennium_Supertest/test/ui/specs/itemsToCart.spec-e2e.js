const {Builder, By, until} = require('selenium-webdriver');
require("dotenv").config();
const requestUrl = process.env.DEV_UI_ENDPOINT;

describe('Google Search', function() {
  let driver;

  beforeEach(() => {
    driver = new Builder().forBrowser('chrome').build();
  });

  it('Filters laptops by selection and successfully adds 1 item to the cart', async function addItemToCart() {
    
    await driver.get(`${requestUrl}`);   
    
    let laptopsLink = await driver.findElement(By.className('hpg-cat-item-wrap dds__px-2'));
    await driver.wait(until.elementIsVisible(laptopsLink),1000);
    await laptopsLink.click();

    let cartItem = await driver.findElement(By.id('refinement-37868'));
    await driver.wait(until.elementIsVisible(cartItem),1000);
    await cartItem.click();

    let cartItem2 = await driver.findElement(By.className('ps-image-area'));
    await driver.wait(until.elementIsVisible(cartItem2),1000);
    await cartItem2.click();

    let cartItem3 = await driver.findElement(By.className('btn btn-success dellmetrics-browseconfig atc-cta-mfe rounded-sm'));
    await driver.wait(until.elementIsVisible(cartItem3),1000);
    await cartItem3.click();

    let resultMessage = await driver.findElement(By.className('cart mh-flyout-link'));
    let resultValue = await resultMessage.getAttribute("cart-count-label")
    expect(resultValue).toEqual('{0} {1} in your cart.');

  });

  afterEach(() => {
    driver.quit();
  });
});