import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/events/new')
})

test.describe('New Event Page', () => {
  test('Page title is accurate', async ({ page }) => {
    await expect(page).toHaveTitle('New Event | Circle')
  })

  test('Top level heading is visible', async ({ page }) => {
    const topLevelHeading = page.getByRole('heading', {
      name: 'New Event',
    })
    await expect(topLevelHeading).toBeVisible()
  })

  test('Input for event name is visible and enabled', async ({ page }) => {
    const inputEventName = page.getByLabel('Event Name')
    await expect(inputEventName).toBeVisible()
    await expect(inputEventName).toBeEnabled()
  })

  test('Input option for virtual location is visible and enabled', async ({
    page,
  }) => {
    const virtualLocationOptionInput = page.getByLabel('Virtual')
    await expect(virtualLocationOptionInput).toBeVisible()
    await expect(virtualLocationOptionInput).toBeEnabled()
  })

  test('Input option for in person location is visible and enabled', async ({
    page,
  }) => {
    const inPersonLocationOptionInput = page.getByLabel('In person')
    await expect(inPersonLocationOptionInput).toBeVisible()
    await expect(inPersonLocationOptionInput).toBeEnabled()
  })

  test('Input for date and time visible and enabled', async ({ page }) => {
    const dateAndTimeInput = page.getByLabel('Set date and time')
    await expect(dateAndTimeInput).toBeVisible()
    await expect(dateAndTimeInput).toBeEnabled()
  })

  test('Input select for duration is visible and enabled', async ({ page }) => {
    const durationInput = page.getByLabel('Duration')
    await expect(durationInput).toBeVisible()
    await expect(durationInput).toBeEnabled()
  })

  test('Input textarea for description is visible and enabled', async ({
    page,
  }) => {
    const descriptionTextareaInput = page.getByLabel('description')
    await expect(descriptionTextareaInput).toBeVisible()
    await expect(descriptionTextareaInput).toBeEnabled()
  })

  test('Input for custom URL is visible and enabled', async ({ page }) => {
    const customUrlInput = page.getByLabel('Custom URL')
    await expect(customUrlInput).toBeVisible()
    await expect(customUrlInput).toBeEnabled()
  })

  test('Create Event button is visible and disabled', async ({ page }) => {
    const createButton = page.getByRole('button', {
      name: 'Create Event',
    })
    await expect(createButton).toBeVisible()
    await expect(createButton).toBeDisabled()
  })
  test('Cancel button is visible and enabled', async ({ page }) => {
    const cancelButton = page.getByRole('button', {
      name: 'Cancel',
    })
    await expect(cancelButton).toBeVisible()
    await expect(cancelButton).toBeEnabled()
  })
})
