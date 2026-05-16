const { test, expect } = require('@playwright/test');

test('can submit and persist a comment', async ({ page }) => {
  const text = `自动化评论 ${Date.now()}`;

  await page.goto('http://127.0.0.1:4173');
  await page.locator('[data-open]').first().click();

  await expect(page.locator('#comment-form')).toBeVisible();
  await page.locator('#comment-rating').selectOption('5');
  await page.locator('#comment-text').fill(text);
  await page.locator('#comment-form button[type="submit"]').click();

  await expect(page.locator('#comment-list .comment-item').first()).toContainText(text);

  await page.locator('#modal-exit').click();
  await page.locator('[data-open]').first().click();
  await expect(page.locator('#comment-list .comment-item').first()).toContainText(text);
});
