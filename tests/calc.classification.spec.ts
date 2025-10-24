import { test, expect } from '../fixtures/test-fixtures';

test.describe('BMI Classification (WHO Standards)', () => {

  test('Displays "Severe Thinness" for BMI < 16', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with values producing BMI < 16

    // TODO: click calculate

    // TODO: assert classification label is "Severe Thinness"
  });

  test('Displays "Moderate Thinness" for 16.1 <= BMI <= 17.0', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with values producing BMI 16.1-17.0

    // TODO: click calculate

    // TODO: assert classification label is "Moderate Thinness"
  });

  test('Displays "Mild Thinness" for 17.1 <= BMI <= 18.5', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with values producing BMI 17.1-18.5

    // TODO: click calculate

    // TODO: assert classification label is "Mild Thinness"
  });

  test('Displays "Normal" for 18.6 <= BMI <= 24.9', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with values producing BMI 18.6-24.9

    // TODO: click calculate

    // TODO: assert classification label is "Normal"
  });

  test('Displays "Overweight" for 25.1 <= BMI <= 29.9', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with values producing BMI 25.1-29.9

    // TODO: click calculate

    // TODO: assert classification label is "Overweight"
  });

  test('Displays "Obese Class I" for 30.1 <= BMI <= 34.9', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with values producing BMI 30.1-34.9

    // TODO: click calculate

    // TODO: assert classification label is "Obese Class I"
  });

  test('Displays "Obese Class II" for 35.1 <= BMI <= 40.0', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with values producing BMI 35.1-40.0

    // TODO: click calculate

    // TODO: assert classification label is "Obese Class II"
  });

  test('Displays "Obese Class III" for BMI > 40.0', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: fill form with values producing BMI > 40

    // TODO: click calculate

    // TODO: assert classification label is "Obese Class III"
  });

  test('No classification is shown when BMI cannot be calculated', async ({ calcPage }) => {
    await calcPage.open();

    // TODO: leave height/weight missing or invalid

    // TODO: click calculate

    // TODO: assert that classification label is not displayed
  });

});
