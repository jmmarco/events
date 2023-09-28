import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000')
})

test.describe('Index', () => {
  test('Page title is accurate', async ({ page }) => {
    await expect(page).toHaveTitle('Events | Circle')
  })

  test('Top level heading is visible', async ({ page }) => {
    const topLevelHeading = page.getByRole('heading', { name: 'Events' })
    await expect(topLevelHeading).toBeVisible()
  })

  test('Create button is visible', async ({ page }) => {
    const createButton = page.getByRole('button', { name: 'Create' })
    await expect(createButton).toBeVisible()
  })
})
