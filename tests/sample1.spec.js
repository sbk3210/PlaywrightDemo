import{test,expect} from '@playwright/test'

test('My 1st test', async({page}) =>{

    await page.goto("https://google.com/")

})