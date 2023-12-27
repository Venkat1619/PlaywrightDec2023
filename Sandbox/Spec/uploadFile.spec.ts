import {test} from '@playwright/test';
import { uploadFilePage } from '../Page/uploadPage';

test("Test case for uploadFiles",async({page,baseURL})=>{
    await page.goto(`${baseURL}file-upload`);
    const file_upload = new uploadFilePage(page);
    await file_upload.fileUpload();
})