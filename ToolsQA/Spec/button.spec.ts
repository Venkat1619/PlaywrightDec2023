import { test, expect } from "@playwright/test";
import { buttonEx } from "../Page/buttonPage";

test("button testing", async ({ page, baseURL }) => {
    const doubleBtn = new buttonEx(page)
    await page.goto(`https://demoqa.com/buttons`);
    await doubleBtn.doubleClick();
    await doubleBtn.rightClick();
    await doubleBtn.buttonClick();
})