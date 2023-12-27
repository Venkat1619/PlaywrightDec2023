import { expect, Page } from "@playwright/test";
import buttonLocators from '../locators/buttonLocators.json';

export class buttonEx {
   
    constructor(public page: Page) { }

    async doubleClick() {
        await this.page.locator(buttonLocators.locators.doubleClick).dblclick();
        expect(await this.page.locator(buttonLocators.assertionLocators.doubleClickMsg)).toContainText("You have done a double click")
    }
    async rightClick() {
        await this.page.click(buttonLocators.locators.rightClick, {
            button: 'right',
        });
        expect(await this.page.locator(buttonLocators.assertionLocators.rightClickMsg)).toContainText("You have done a right click")
    }
    async buttonClick() {
        await this.page.click(buttonLocators.locators.simpleButton);
        expect(await this.page.locator(buttonLocators.assertionLocators.dynamicMsg)).toContainText("You have done a dynamic click")
    }
}