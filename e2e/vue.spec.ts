import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  const localhostURL = 'http://localhost:5173';
  
  await page.goto(localhostURL);
  
  const mainHeader = page.getByRole('heading', { name: 'Welcome to Game of Cards' })
  await expect(mainHeader).toBeVisible();

  await expect(page.locator('button:has-text("Game Rules")')).toBeVisible();
  await expect(page.locator('button:has-text("Begin")')).toBeVisible();  
  
  // Starts the game
  await page.getByRole('button', { name: 'Begin' }).click();
  const inGameHeader = page.getByRole('heading', { name: 'Game has started, enjoy!' });

  await expect(inGameHeader).toBeVisible();
  await expect(page.getByText('Points')).toHaveCount(4);

  // Check if available cards and hidden cards rendered correctly
  const availableCards = page.locator('.relative > .border-green-600');
  await expect(availableCards).toHaveCount(4);
  const hiddenCards = page.locator('.relative > .border-blue-500');
  await expect(hiddenCards).toHaveCount(16);

  // Deal next round and check if players' have extra card for each round
  await page.getByRole('button', { name: 'Deal Next Round' }).click();
  await expect(hiddenCards).toHaveCount(12);

  await page.getByRole('button', { name: 'Deal Next Round' }).click();
  await expect(hiddenCards).toHaveCount(8);

  await page.getByRole('button', { name: 'Deal Next Round' }).click();
  await expect(hiddenCards).toHaveCount(4);

  await page.getByRole('button', { name: 'Deal Next Round' }).click();
  await expect(hiddenCards).toHaveCount(0);

  // Game has ended
  await expect(page.locator('p:has-text("Congrats")')).toBeVisible();
});