import {test,expect,Page} from '@playwright/test';
import locator from '../locators/downloadLocator.json'
export class DownloadPage{
    constructor(private page:Page){}
    async downloadFile(){
        const download = await Promise.all([
             this.page.waitForEvent('download'),
            await  this.page.click(locator.download)
        ]);
        const fileName = await download[0].suggestedFilename();
        await download[0].saveAs(fileName)
    }

}