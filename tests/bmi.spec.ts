import { test, expect } from '../fixtures/test-fixtures';

test('Page is accessible and elements are present', async ({ calcPage }) => {
  await calcPage.open(); // open the page
  await calcPage.verifyPageElementsVisible(); // verify all key elements
});
