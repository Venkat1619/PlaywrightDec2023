import {test,expect, Page} from '@playwright/test';
import dragLocators from '../locators/dragdropLocators.json';

export class DragNDropPage{
    constructor(private page:Page){}

    async dragNdrop(){
        //1st approach
         await this.page.locator(dragLocators.srcRome).dragTo(this.page.locator(dragLocators.destRome));

        // 2nd approach
         await this.page.locator(dragLocators.srcWashington).hover();
         await this.page.mouse.down();

         await this.page.locator(dragLocators.destWashington).hover();
         await this.page.mouse.up();

    }

}