import { test, expect } from "@playwright/test";
test.describe.serial("Test cases for ScreenShots", () => {
  test("Screenshot", async ({ page }) => {
    await page.goto("https://demo.opencart.com/");
    await page.screenshot({ path: "tests/screenshots/" + "opn.png" });
  });

  test("Full Page Screenshot", async ({ page }) => {
    await page.goto("https://demo.opencart.com/");
    await page.screenshot({
      path: "tests/screenshots/" + "fullPage.png",
      fullPage: true,
    });
  });

  test("Particular Element Screenshot", async ({ page }) => {
    await page.goto("https://demo.opencart.com/");
    await page
      .locator("//img[@title='iPhone']")
      .screenshot({ path: "tests/screenshots/" + "element.png" });
  });
});
