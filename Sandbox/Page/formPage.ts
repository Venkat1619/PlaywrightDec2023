import {test,expect,Page,chromium } from '@playwright/test'
import formLocators from '../locators/formLocators.json'
import exp from 'constants';

export class FormPage{

    

    constructor(private page:Page){}

    async formFields(name:any,email:any,message:any):Promise<void>{

        //instead of launching browser playwright has Page directly we can access by import
        // const browser = await chromium.launch();
        // const page = await browser.newPage();

        await this.page.locator(formLocators.name_input).fill(name);
        await expect(this.page.locator(formLocators.name_input)).toHaveValue(name);
        await this.page.click(formLocators.radioBtn);
        await this.page.check(formLocators.checkBox);
        // await expect(this.page.locator(formLocators.checkBox)).toBeChecked();
        await expect(this.page.locator(formLocators.checkBox).isChecked()).toBeTruthy();
       
        await this.page.selectOption(formLocators.selector,{
            value:'Yes',
        });
        const content = await this.page.locator(formLocators.selector).textContent();
        await expect(content?.includes('Yes')).toBeTruthy();

        await this.page.locator(formLocators.email_input).fill(email);
        await expect(this.page.locator(formLocators.email_input)).toHaveValue(email);
        await this.page.locator(formLocators.message_input).fill(message);
        await this.page.click(formLocators.submit_btn);
        await expect(this.page.locator(formLocators.success_msg)).toHaveText('Your message has been sent');

    }

}