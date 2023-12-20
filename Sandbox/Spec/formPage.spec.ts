import {test,expect} from '@playwright/test';
import formData from '../text-data/formData.json';
import { FormPage } from '../Page/formPage';

test("Test case for Form",async({page,baseURL})=>{
    await page.goto(`${baseURL}form-fields`);
    const form = new FormPage(page);
    await form.formFields(formData.name_input,formData.email_input,formData.message);
    
})