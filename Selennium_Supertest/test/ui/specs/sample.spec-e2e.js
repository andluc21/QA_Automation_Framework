const { By, Builder } = require('selenium-webdriver');
const assert = require("assert");
const requestUrl = process.env.DEV_UI_ENDPOINT;

const { suite } = require('selenium-webdriver/testing');
require("chromedriver");

describe.skip('First script', function() {
    let driver;

    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterEach(async () => await driver.quit());

    it('First Selenium script', async function() {
        await driver.get(`${requestUrl}`);

        let title = await driver.getTitle();
        assert.equal("Web form", title);

        await driver.manage().setTimeouts({ implicit: 500 });

        let textBox = await driver.findElement(By.name('my-text'));
        let submitButton = await driver.findElement(By.css('button'));
    

        await textBox.sendKeys('Selenium');
        await submitButton.click();

        let message = await driver.findElement(By.id('message'));
        let value = await message.getText();
        assert.equal("Received!", value);

       await driver.wait(until.elementLocated(By.css('sdfsdfsdfsdf')),100000);
    });
});



suite(function(env) {
    describe.skip('First script', function() {
        let driver;

        beforeEach(async function() {
            driver = await new Builder().forBrowser('chrome').build(); // driver = new Builder().forBrowser('firefox').build();
        });

        afterEach(async () => await driver.quit());

        it('First Selenium script', async function() {
            await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

            let title = await driver.getTitle();
            assert.equal("Web form", title);

            await driver.manage().setTimeouts({ implicit: 500 });

            let textBox = await driver.findElement(By.name('my-text'));
            let submitButton = await driver.findElement(By.css('button'));
        

            await textBox.sendKeys('Selenium');
            await submitButton.click();

            let message = await driver.findElement(By.id('message'));
            let value = await message.getText();
            assert.equal("Received!", value);
        });

    });
 });