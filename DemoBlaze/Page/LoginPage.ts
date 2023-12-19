import { test, expect, Page } from "@playwright/test";
import loginLocators from "../locators/loginPageLocators.json";

export class LoginPage {
  constructor(private page: Page) {}
  async login(username?: any, pwd?: any): Promise<void> {
    await expect(this.page.locator(loginLocators.Logo)).toBeVisible();

    await this.page.locator(loginLocators.loginLink).click();
    await this.page.fill(loginLocators.userName, username || undefined);
    await this.page.fill(loginLocators.password, pwd || undefined);

    if (username == (undefined || null || "") || pwd == undefined || null || "") {
      await this.alertForInvalid();
    } else {
      await this.page.click(loginLocators.loginBtn);
    }
  }

  async alertForInvalid() {
    this.page.on("dialog", async (alert) => {
      let msg = await alert.message();
      if ((await msg) == "Please fill out Username and Password.") {
         await alert.accept();
      }
    });

    await this.page.click(loginLocators.loginBtn);
  }
}
