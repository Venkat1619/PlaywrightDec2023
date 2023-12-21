import { Page } from "@playwright/test";
import locators from "../locators/autoSuggestionLocators.json";

export class AutoSuggestionsPage {
  constructor(private page: Page) {}

  async autuSuggestion(src: string, dest: string): Promise<void> {
    await this.page.locator(locators.Origin_City).fill(src);
    await this.page.waitForSelector(locators.autoSuggestions);
    const originsuggestion = await this.page.$$(locators.autoSuggestions);
    for (const s of originsuggestion) {
      let suggestedText = await s.textContent();
      if (suggestedText?.includes("Kukatpally Hyderabad")) {
        await s.click();
        break;
      }
    }

    await this.page.locator(locators.Dest_City).fill(dest);
    await this.page.waitForSelector(locators.autoSuggestions);
    const destSuggestion = await this.page.$$(locators.autoSuggestions);
    for (const s of destSuggestion) {
        let suggestedText = await s.textContent();
        if (suggestedText?.includes("Benz Circle")) {
          await s.click();
          break;
        }
      }

  }
}
