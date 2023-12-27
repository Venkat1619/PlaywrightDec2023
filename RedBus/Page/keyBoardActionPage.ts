import {test,expect,Page} from '@playwright/test';
import locators from '../locators/keyboardactions.json'

export  class keyBoardActionsPage{
    constructor(private page:Page){}

    async keyBoardActions(){
        await this.page.getByPlaceholder(locators.srcPlaceholder).fill('hello world!')
        // select all text
        await this.page.keyboard.press('Control+A');
        //copy text
        await this.page.keyboard.press('Control+C');
        //click tab
        await this.page.keyboard.down('Tab');
        //release tab
        await this.page.keyboard.up('Tab');
        //paste text
        await this.page.keyboard.press('Control+V');
    }
}