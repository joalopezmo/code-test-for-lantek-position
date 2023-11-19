import { expect, test } from '@playwright/test';

test('login page', async ({ page }) => {
  await page.goto('http://localhost:5250/');

  // Se ingresa credenciales invalidas

  await page.locator('input[id=username]').fill('admin');
  await page.locator('input[id="password"]').fill('admin');
  await page.click('button[id=login]');

  // Se espera que el alert de error sea visible
  expect(
    await page
      .locator('text = Credenciales inválidas. Por favor, inténtalo de nuevo. ')
      .isVisible()
  );
});
