import {test} from '@playwright/test';
import { keyBoardActionsPage } from '../Page/keyBoardActionPage';

test("test cases for keybord actions",async({page})=>{
    await page.goto("https://gotranscript.com/text-compare");
    const keyboard_actions = new keyBoardActionsPage(page);
    keyboard_actions.keyBoardActions();
});