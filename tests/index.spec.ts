import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Index', () => {
  test('Page title is accurate', async ({ page }) => {
    await expect(page).toHaveTitle('Events | Circle')
  })

  test('Top level heading is visible', async ({ page }) => {
    const topLevelHeading = page.getByRole('heading', { name: 'Events' })
    await expect(topLevelHeading).toBeVisible()
  })

  test('Api fetch succeeds', async ({ request }) => {
    const response = await request.get('http://localhost:4000/events', {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    await expect(data.length).toBe(2)
    await expect(response.ok()).toBeTruthy()
  })

  test('Create button is visible', async ({ page }) => {
    const createButton = page.getByRole('button', { name: 'Create' })
    await expect(createButton).toBeVisible()
  })
})
