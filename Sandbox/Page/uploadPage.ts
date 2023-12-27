import {test,expect,Page} from '@playwright/test';
import locators from '../locators/uploadFile.json';

export class uploadFilePage{
    constructor(private page:Page){}

    async fileUpload(){
        await this.page.setInputFiles(locators.choosefile,'notes.txt');
        await this.page.click(locators.uploadBtn);
        await  expect (this.page.locator(locators.successMsg)).toHaveText('Thank you for your message. It has been sent.')
    }
}
