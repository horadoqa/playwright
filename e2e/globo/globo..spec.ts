import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://globo.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/globo.com - Absolutamente tudo sobre notícias, esportes e entretenimento/);
});

