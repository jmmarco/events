import { test, expect } from '@playwright/test'

const nonExistingRoute = '/something-that-does-not-exist'
test.beforeEach(async ({ page }) => {
  await page.goto(nonExistingRoute)
})

test.describe('Navigating to unknown page', () => {
  test('Error heading', async ({ page }) => {
    const errorHeading = page.getByRole('heading', {
      name: 'Sorry, an unexpected error has occurred.',
    })

    await expect(errorHeading).toBeVisible()
  })

  test('Error message', async ({ page }) => {
    const errorMessage = page.locator('p')

    await expect(errorMessage).toBeVisible()
    await expect(errorMessage).toContainText(
      `No route matches URL "${nonExistingRoute}"`,
    )
  })
})
