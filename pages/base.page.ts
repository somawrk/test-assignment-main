import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Generic navigation helper
  async goto(url: string) {
    await this.page.goto(url);
  }

}
