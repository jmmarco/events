import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  page.route('**', (route, request) => {
    console.log(request.url())
    route.continue()
  })
  await page.goto('/events/1')

  const editButton = page.getByRole('button', {
    name: 'Edit',
  })
  await expect(editButton).toBeVisible()
  await editButton.click()
})

test.describe('Edit event page', () => {
  test('Input for event name is visible and enabled', async ({ page }) => {
    const inputEventName = page.getByLabel('Event Name')
    await expect(inputEventName).toBeVisible()
    await expect(inputEventName).toBeEnabled()
  })

  test('Input option for in person location is visible and disabled', async ({
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
    await expect(dateAndTimeInput).toHaveValue('2023-11-15T16:00')
  })

  test('Input select for duration is visible and disabled', async ({
    page,
  }) => {
    const durationInput = page.getByLabel('duration')
    await expect(durationInput).toBeVisible()
    await expect(durationInput).toBeEnabled()
    await expect(durationInput).toHaveText('4')
  })

  test('Input textarea for description is visible and disabled', async ({
    page,
  }) => {
    const descriptionTextareaInput = page.getByLabel('description')
    await expect(descriptionTextareaInput).toBeVisible()
    await expect(descriptionTextareaInput).toBeEnabled()
    await expect(descriptionTextareaInput).toHaveValue(
      'DHH shows us how to install Rails',
    )
  })

  test('Input for custom URL is visible and disabled', async ({ page }) => {
    const customUrlInput = page.getByLabel('Custom URL')
    await expect(customUrlInput).toBeVisible()
    await expect(customUrlInput).toBeEnabled()
  })

  test('Save event button is visible and enabled', async ({ page }) => {
    const editEventButton = page.getByRole('button', {
      name: 'Save Event',
    })
    await expect(editEventButton).toBeVisible()
    await expect(editEventButton).toBeEnabled()
  })
  test('Cancel button is visible and enabled', async ({ page }) => {
    const cancelButton = page.getByRole('button', {
      name: 'Cancel',
    })
    await expect(cancelButton).toBeVisible()
    await expect(cancelButton).toBeEnabled()
  })
})
