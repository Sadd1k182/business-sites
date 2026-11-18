import { expect, test } from '@playwright/test';

test.describe('GPS & PC Service Landing Page', () => {
  test('renders Ukrainian content, Tailwind styles, OpenGraph tags, and valid contact CTAs', async ({
    page,
  }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Прошивка GPS-навігаторів/);

    const heroBg = await page.evaluate(
      () => getComputedStyle(document.querySelector('section')!).backgroundColor
    );
    expect(heroBg).not.toBe('rgba(0, 0, 0, 0)');

    const ogTitle = await page
      .locator('meta[property="og:title"]')
      .getAttribute('content');
    expect(ogTitle).toContain('Прошивка GPS-навігаторів');

    await expect(
      page.getByRole('heading', {
        name: /Українська мова та свіжі карти для GPS-навігаторів/,
      })
    ).toBeVisible();

    await expect(page.locator('a[href^="tel:"]').first()).toBeVisible();
    await expect(page.locator('a[href^="viber://"]').first()).toBeVisible();
    await expect(page.locator('a[href^="https://t.me/"]').first()).toBeVisible();
  });

  for (const viewport of [
    { width: 375, height: 812 },
    { width: 1024, height: 768 },
    { width: 1440, height: 900 },
  ]) {
    test(`has zero horizontal overflow at ${viewport.width}x${viewport.height}`, async ({
      page,
    }) => {
      await page.setViewportSize(viewport);
      await page.goto('/');

      const hasOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth
      );
      expect(hasOverflow).toBe(false);
    });
  }
});
