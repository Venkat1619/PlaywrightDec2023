import { test, expect, Page } from "@playwright/test";
import dateLocators from "../locators/dateLocators.json";

export class CalendarPage {
  targetYear = "2023";
  targetMonth = "August";
  targetDate = "12";
  direction: any;
  constructor(private page: Page) {}

  async datePicker() {
    await this.page.locator(dateLocators.calendarIcon).click();
    while (true) {
      const presenMonth: any = await this.page .locator(dateLocators.presentMonth).textContent();
      const presenYear: any = await this.page.locator(dateLocators.presentYear).textContent();
      if (presenYear < this.targetYear) {
        //2023 < 2024
        this.direction = "right";
        await this.page.click(dateLocators.nextSymbol);
      }
      if (presenYear > this.targetYear) {
        //2023>2024
        this.direction = "left";
        await this.page.click(dateLocators.prevSymbol);
      }

      if (presenYear == this.targetYear) {
        if (this.direction === "right") {
          if (this.targetMonth == presenMonth) {
            await this.selectDate();
            await this.page.click(dateLocators.submitBtn);
            break;
          } else {
            await this.page.click(dateLocators.nextSymbol);
          }
        } else {
          if (this.targetMonth == presenMonth) {
            await this.selectDate();
            await this.page.click(dateLocators.submitBtn);
            break;
          } else {
            await this.page.click(dateLocators.prevSymbol);
          }
        }
      }
    }
  }

  async selectDate() {
    let expectedDate = await this.page.$$(dateLocators.date);
    for (const date of expectedDate) {
      const target = await date.textContent();
      if (await target?.includes(this.targetDate)) {
        await date.click();
        break;
      }
    }
  }
}
