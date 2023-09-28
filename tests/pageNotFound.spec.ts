import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/something-that-does-not-exist')
})

test.describe('Navigating to unknown page', () => {
  test('context', async ({ page }) => {
    const errorHeading = page.getByRole('heading', {
      name: 'Sorry, an unexpected error has occurred.',
    })
    const errorMessage = page.getByText('Not found')

    await expect(errorHeading).toBeVisible()
    await expect(errorMessage).toBeVisible()
  })
})
