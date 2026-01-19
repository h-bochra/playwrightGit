//creer un login invalide sauce demo 
import { test, expect } from '@playwright/test';



test('login invalide', async ({ page }) => {
     await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('invalidUser');
    await page.locator('#password').fill('invalidPass');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});