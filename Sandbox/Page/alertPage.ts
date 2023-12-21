import { Page, expect } from "@playwright/test";
import alertLocators from '../locators/alertLocators.json';


export class AlertPage{
    constructor(private page:Page){}

    async simpleAlert():Promise<void>{
      this.page.on("dialog",async(alert)=>{
          await alert.accept();
      });
      await this.page.locator(alertLocators.simpleAlert).click();
    }
    
    async confirmAlert():Promise<void>{
        this.page.on("dialog",async(alert)=>{
            await alert.accept();
        });
        await this.page.locator(alertLocators.confirmAlert).click();
        await expect(this.page.locator(alertLocators.confirmResult)).toHaveText('OK it is!');
      }

      async dismissAlert():Promise<void>{
        this.page.on("dialog",async(alert)=>{
            await alert.dismiss();
        });
        await this.page.locator(alertLocators.confirmAlert).click();
        await expect(this.page.locator(alertLocators.confirmResult)).toHaveText('Cancel it is!');
      }

      async promptAlert():Promise<void>{
        this.page.on("dialog",async(alert)=>{
            await alert.accept('venkat');
        });
        await this.page.locator(alertLocators.prompt).click();
        await this.page.waitForSelector(alertLocators.promptResult)
        await expect(this.page.locator(alertLocators.promptResult)).toHaveText('Nice to meet you, venkat!');
        
      }

}