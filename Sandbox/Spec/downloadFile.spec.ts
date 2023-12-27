import {test,expect} from '@playwright/test';
import { DownloadPage } from '../Page/downloadFilePage';

test("Download file",async({page,baseURL})=>{
    await page.goto(`${baseURL}file-download`);
    const download_file = new DownloadPage(page);
   await  download_file.downloadFile();
});