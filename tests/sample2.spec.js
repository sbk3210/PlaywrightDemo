import {test, expect} from "@playwright/test"

test('my sample2', async({page})=>{

    await page.goto('https://saucedemo.com/')
})