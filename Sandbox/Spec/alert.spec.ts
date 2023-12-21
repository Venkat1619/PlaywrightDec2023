import { test, expect } from "@playwright/test";
import { AlertPage } from "../Page/alertPage";

test.describe.serial("Test cases for different types of alerts", () => {
  test("Test case for simple alert", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}popups`);
    const simpleAlert = new AlertPage(page);
    simpleAlert.simpleAlert();
  });
  test("Test case for confirm alert", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}popups`);
    const confirmAlert = new AlertPage(page);
    confirmAlert.confirmAlert();
  });
  test("Test case for dismiss alert", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}popups`);
    const dismissAlert = new AlertPage(page);
    dismissAlert.dismissAlert();
  });

  test("Test case for prompt alert", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}popups`);
    const promptAlert = new AlertPage(page);
    promptAlert.promptAlert();
  });
});
