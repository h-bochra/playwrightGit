import {test,expect} from '@playwright/test'


test('login valide ', { tag : "[@smoke]"}, async ({page})=> {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
})




test('login invalide', { tag : "[@regression]"}, async ({ page }) => {
     await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('invalidUser');
    await page.locator('#password').fill('invalidPass');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});


