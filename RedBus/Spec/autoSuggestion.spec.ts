import {test,expect} from '@playwright/test';
import data from '../text-data/data.json';
import { AutoSuggestionsPage } from '../Page/autosuggestion';

// test.describe.serial("Test cases for red bus",()=>{
    test("Test case for auto suggestions",async({page})=>{
         await page.goto('https://www.redbus.in/');
         const autoSuggestions = new AutoSuggestionsPage(page);
         await autoSuggestions.autuSuggestion(data.src,data.dest);
    })
// })