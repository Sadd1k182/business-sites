import { expect, test } from '@playwright/test';

test.describe('GPS & PC Service Landing Page', () => {
  test('renders Ukrainian content, switches to English via UA/EN toggle, and has valid contact CTAs', async ({
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
        name: /Свіжі карти Європи 2026 та прошивка GPS-навігаторів/,
      })
    ).toBeVisible();

    await page.getByRole('button', { name: 'EN', exact: true }).click();
    await expect(
      page.getByRole('heading', {
        name: /Europe 2026 Maps & GPS Navigator Firmware/,
      })
    ).toBeVisible();

    await page.getByRole('button', { name: 'UA', exact: true }).click();
    await expect(
      page.getByRole('heading', {
        name: /Свіжі карти Європи 2026 та прошивка GPS-навігаторів/,
      })
    ).toBeVisible();

    await expect(page.locator('a[href^="tel:"]').first()).toBeVisible();
    await expect(page.locator('a[href^="viber://"]').first()).toBeVisible();
    await expect(page.locator('a[href^="https://t.me/"]').first()).toBeVisible();
    await expect(page.locator('a[href^="https://wa.me/"]').first()).toBeVisible();
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
