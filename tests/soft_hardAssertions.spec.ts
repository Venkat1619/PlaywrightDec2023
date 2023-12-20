
import {test,expect} from '@playwright/test'
test("soft and hard assertions", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);

    //hard assertion if you give wrong title then the code   will terminate 
    await expect(page).toHaveTitle("STORE123");

    //soft assertion if you give wrong title then  also the code will not  terminate 
    await expect.soft(page).toHaveTitle("STORE12");

  });