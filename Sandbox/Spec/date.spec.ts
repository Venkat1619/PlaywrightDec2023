import {test,expect} from '@playwright/test';
import { CalendarPage } from '../Page/datePage';

test('Test case for date picker',async({page,baseURL})=>{
    await page.goto(`${baseURL}calendars`);
    const calendar = new CalendarPage(page);
    await calendar.datePicker();
});