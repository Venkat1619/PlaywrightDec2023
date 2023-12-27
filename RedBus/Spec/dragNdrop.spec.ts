import {test,expect} from '@playwright/test';
import { DragNDropPage } from '../Page/dragNdrop';

test("Test case for drag and drop",async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const drag_drop = new DragNDropPage(page);
    await drag_drop.dragNdrop();
})