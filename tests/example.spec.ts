import {test,expect} from '@playwright/test';

test("Visit the URL",async({page,baseURL})=>{

  await page.goto('https://practice.expandtesting.com/js-dialogs');
})

