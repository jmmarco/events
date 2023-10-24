import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/events/1')
})

test.describe('Edit Event Page', () => {
  test('Page title is accurate', async ({ page }) => {
    await expect(page).toHaveTitle('Event: Rails Intro  | Circle')
  })

  test('Top level heading is visible', async ({ page }) => {
    const topLevelHeading = page.getByRole('heading', {
      name: 'Event Details',
    })
    await expect(topLevelHeading).toBeVisible()
  })

  test('Input for event name is visible and disabled', async ({ page }) => {
    const inputEventName = page.getByLabel('Event Name')
    await expect(inputEventName).toBeVisible()
    await expect(inputEventName).toBeDisabled()
    await expect(inputEventName).toHaveValue('Rails Intro')
  })

  test('Input option for in person location is visible and disabled', async ({
    page,
  }) => {
    const inPersonLocationOptionInput = page.getByLabel('In person')
    await expect(inPersonLocationOptionInput).toBeVisible()
    await expect(inPersonLocationOptionInput).toBeDisabled()
  })

  test('Input for date and time visible and enabled', async ({ page }) => {
    const dateAndTimeInput = page.getByLabel('Set date and time')
    await expect(dateAndTimeInput).toBeVisible()
    await expect(dateAndTimeInput).toBeDisabled()
    await expect(dateAndTimeInput).toHaveValue('2023-11-15T16:00')
  })

  test('Input select for duration is visible and disabled', async ({
    page,
  }) => {
    const durationInput = page.getByLabel('duration')
    await expect(durationInput).toBeVisible()
    await expect(durationInput).toBeDisabled()
    await expect(durationInput).toHaveText('4')
  })

  test('Input textarea for description is visible and disabled', async ({
    page,
  }) => {
    const descriptionTextareaInput = page.getByLabel('description')
    await expect(descriptionTextareaInput).toBeVisible()
    await expect(descriptionTextareaInput).toBeDisabled()
    await expect(descriptionTextareaInput).toHaveValue(
      'DHH shows us how to install Rails',
    )
  })

  test('Input for custom URL is visible and disabled', async ({ page }) => {
    const customUrlInput = page.getByLabel('Custom URL')
    await expect(customUrlInput).toBeVisible()
    await expect(customUrlInput).toBeDisabled()
  })

  test('Edit event button is not visible', async ({ page }) => {
    const editEventButton = page.getByRole('button', {
      name: 'Edit Event',
    })
    await expect(editEventButton).toBeHidden()
  })
  test('Cancel button is not visible', async ({ page }) => {
    const cancelButton = page.getByRole('button', {
      name: 'Cancel',
    })
    await expect(cancelButton).toBeHidden()
  })
})
