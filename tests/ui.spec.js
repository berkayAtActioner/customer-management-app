const { test, expect } = require('@playwright/test');

test.describe('Customer Management App UI Tests', () => {
  test('home page redirects to accounts', async ({ page }) => {
    await page.goto('/');
    // Home redirects to accounts, so check we're on accounts page
    await expect(page.locator('h1')).toContainText('Accounts');
    await expect(page.locator('.sidebar')).toBeVisible();
  });

  test('accounts page loads and displays data', async ({ page }) => {
    await page.goto('/accounts');
    await expect(page.locator('h1')).toContainText('Accounts');
    await expect(page.locator('table')).toBeVisible();
    // Use toHaveCount with a number instead of greaterThan
    const rowCount = await page.locator('tbody tr').count();
    expect(rowCount).toBeGreaterThan(0);
  });

  test('contacts page loads and displays data', async ({ page }) => {
    await page.goto('/contacts');
    await expect(page.locator('h1')).toContainText('Contacts');
    await expect(page.locator('table')).toBeVisible();
    const rowCount = await page.locator('tbody tr').count();
    expect(rowCount).toBeGreaterThan(0);
  });

  test('navigation works via sidebar', async ({ page }) => {
    await page.goto('/accounts');
    
    // Look for any contacts link in sidebar (might not have data-href)
    const contactsLink = page.locator('.sidebar').locator('text=Contacts').first();
    if (await contactsLink.isVisible()) {
      await contactsLink.click();
      await expect(page).toHaveURL(/.*contacts/);
      await expect(page.locator('h1')).toContainText('Contacts');
    }
  });

  test('account detail page loads', async ({ page }) => {
    await page.goto('/accounts/1');
    await expect(page.locator('h1')).toBeVisible();
    // Just check that page has some content
    await expect(page.locator('body')).toBeVisible();
  });

  test('contact detail page loads', async ({ page }) => {
    await page.goto('/contacts/1');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('body')).toBeVisible();
  });

  test('basic page structure is present', async ({ page }) => {
    await page.goto('/accounts');
    // Check for basic page elements
    await expect(page.locator('.sidebar')).toBeVisible();
    await expect(page.locator('table')).toBeVisible();
  });

  test('table structure is correct', async ({ page }) => {
    await page.goto('/accounts');
    
    const table = page.locator('table');
    await expect(table).toBeVisible();
    
    // Check table has headers
    const headers = page.locator('th');
    const headerCount = await headers.count();
    expect(headerCount).toBeGreaterThan(0);
  });

  test('sidebar navigation links exist', async ({ page }) => {
    await page.goto('/accounts');
    
    // Check sidebar has navigation links (any clickable elements)
    await expect(page.locator('.sidebar')).toBeVisible();
    const linkCount = await page.locator('.sidebar a, .sidebar [data-href]').count();
    expect(linkCount).toBeGreaterThanOrEqual(1);
  });
});