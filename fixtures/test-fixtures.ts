import { test as base, expect } from '@playwright/test';
import { CalcPage } from '../pages/calc.page';

export const test = base.extend<{
  calcPage: CalcPage,
  fillBmiForm: () => Promise<void>,
  verifyFormReset: () => Promise<void>
}>({
  // Provide calcPage
  calcPage: async ({ page }, use) => {
    const calcPage = new CalcPage(page);
    await use(calcPage);
  },

  // Fixture to fill BMI form with default values
  fillBmiForm: async ({ calcPage }, use) => {
    await use(async () => {
      await calcPage.genderDropdown.selectOption('Male');
      await calcPage.ageInput.fill('30');
      await calcPage.heightInput.fill('180');
      await calcPage.weightInput.fill('75');
    });
  },

  // Fixture to verify fields are reset
  verifyFormReset: async ({ calcPage }, use) => {
    await use(async () => {
      await expect(calcPage.ageInput).toHaveValue('');
      await expect(calcPage.heightInput).toHaveValue('');
      await expect(calcPage.weightInput).toHaveValue('');
    });
  },
});

export { expect };
