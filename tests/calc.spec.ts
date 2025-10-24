import { test } from '../fixtures/test-fixtures';

test.describe('BMI Calculation', () => {

  test('User can calculate BMI with valid input', async ({ calcPage, fillBmiForm }) => {
    await calcPage.open();
    await fillBmiForm();
    await calcPage.calculateBtn.click();
    await calcPage.page.locator('#bmi').isVisible();
  });

  test('BMI uses full precision internally, rounded only for display', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with inputs that produce a long decimal BMI
    // await fillBmiForm({ height: 179, weight: 72 });

    // TODO: click calculate
    // await calcPage.calculateBtn.click();

    // TODO: assert displayed BMI is rounded to 1 decimal
    // TODO: optionally, assert internal calculation is full precision if accessible
  });

  test('Displays error for missing height', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with weight only
    // await calcPage.weightInput.fill('70');

    // TODO: click calculate
    // await calcPage.calculateBtn.click();

    // TODO: assert error message is displayed
  });

  test('Displays error for missing weight', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with height only
    // await calcPage.heightInput.fill('180');

    // TODO: click calculate
    // await calcPage.calculateBtn.click();

    // TODO: assert error message is displayed
  });

  test('Displays error for non-numeric inputs', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with non-numeric values
    // await calcPage.heightInput.fill('abc');
    // await calcPage.weightInput.fill('xyz');

    // TODO: click calculate
    // await calcPage.calculateBtn.click();

    // TODO: assert error message is displayed
  });

  test('Displays error for unrealistic height or weight', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with unrealistic values
    // await fillBmiForm({ height: 5, weight: 500 });

    // TODO: click calculate
    // await calcPage.calculateBtn.click();

    // TODO: assert error message is displayed
  });

  test('Clear button resets the form', async ({ calcPage, fillBmiForm, verifyFormReset }) => {
    await calcPage.open();
    await fillBmiForm();

    await calcPage.calculateBtn.click();
    await calcPage.clearBtn.click();

    // Use fixture to verify form is reset
    // TODO: Use fixture to verify form is reset
  });

});
