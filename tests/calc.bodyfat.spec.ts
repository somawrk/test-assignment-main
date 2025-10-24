import { test, expect } from '../fixtures/test-fixtures';

test.describe('Body Fat Calculation', () => {

  test('Calculates Body Fat% correctly for adult male', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with male, age >= 18, valid height & weight
    // await fillBmiForm({ gender: 'Male', age: 30, height: 180, weight: 75 });

    // TODO: click calculate
    // await calcPage.calculateBtn.click();

    // TODO: assert Body Fat% displayed with one decimal
    // e.g., expect(await calcPage.page.locator('#bodyFat').textContent()).toBe("21.7%");
  });

  test('Calculates Body Fat% correctly for adult female', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with female, age >= 18, valid height & weight

    // TODO: click calculate

    // TODO: assert Body Fat% displayed with one decimal
  });

  test('Does not display Body Fat% for users under 18', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with age < 18

    // TODO: click calculate

    // TODO: assert informational message is displayed
    // TODO: assert Body Fat% is not displayed
  });

  test('Updates BMI and Body Fat when inputs are changed', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with initial values and calculate
    // TODO: assert initial BMI and Body Fat%

    // TODO: change one or more inputs (height, weight, age, gender)
    // TODO: click calculate

    // TODO: assert BMI and Body Fat% are updated correctly
  });

  test('Body Fat% is displayed with one decimal place', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with values that produce a long decimal result
    // TODO: click calculate

    // TODO: assert Body Fat% is rounded to 1 decimal place
  });

});
