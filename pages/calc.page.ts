import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CalcPage extends BasePage {
  genderDropdown = this.page.getByLabel('Gender');
  ageInput = this.page.getByRole('spinbutton', { name: 'Age (ages: 2 - 120)' });
  heightInput = this.page.getByRole('spinbutton', { name: 'Height (cm)' });
  weightInput = this.page.getByRole('spinbutton', { name: 'Weight (kg)' });
  calculateBtn = this.page.getByRole('button', { name: 'Calculate' });
  clearBtn = this.page.getByRole('button', { name: 'Clear' });

  // Open the BMI page
  async open() {
    await this.goto('https://practice.expandtesting.com/bmi');
  }

  // Verify UI elements
  async verifyPageElementsVisible() {
    await expect(this.genderDropdown).toBeVisible();
    await expect(this.ageInput).toBeVisible();
    await expect(this.heightInput).toBeVisible();
    await expect(this.weightInput).toBeVisible();
    await expect(this.calculateBtn).toBeVisible();
    await expect(this.clearBtn).toBeVisible();
  }
}
