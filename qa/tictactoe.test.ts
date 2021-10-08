import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

// Check that clicking the upper left square adds an X to the square.
test('clicking upper left adds an X', async () => {
    let upperLeft = await driver.findElement(By.id('cell-0'))
    await upperLeft.click()

    await driver.sleep(3000)
    expect(await upperLeft.getText()).toContain('X')
    await driver.sleep(3000)
})

// Check that clicking the upper right square adds an X to the square.
test('clicking upper right adds an X', async () => {
    let upperRight = await driver.findElement(By.id('cell-2'))
    await upperRight.click()

    await driver.sleep(3000)
    expect(await upperRight.getText()).toContain('X')
    await driver.sleep(3000)
})

// Check that clicking the lower right square adds an X to the square.
test('clicking the lower right adds an X', async () => {
    let lowerRight = await driver.findElement(By.id('cell-8'))
    await lowerRight.click()

    await driver.sleep(3000)
    expect(await lowerRight.getText()).toContain('X')
    await driver.sleep(3000)
})

// [Harder] Check to see that the computer moves (adds an O) to a square after clicking on a square.
test('computer moves (adds an O) after click', async () => {
    let humanMove = await driver.findElement(By.css('tbody'))
    await humanMove.click()
    await driver.sleep(2000)
    let computerMove = await driver.findElement(By.css('tbody')).getText()

    expect(computerMove).toContain('O')
    await driver.sleep(3000)
})