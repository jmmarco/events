import { apiService } from '@api/apiService'
import { EventProps } from '@customTypes/events/EventProps'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

async function createEvent(payload: EventProps) {
  try {
    const response = await apiService.createEvent(payload)

    if (response.status === 201) {
      return response.data
    } else {
      throw new Error(
        `Failed to create event: Received status code ${response.status}`,
      )
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      // Handle Axios-specific errors
      throw new Error(
        `Failed to create event: ${
          error.response?.data?.message || error.message
        }`,
      )
    } else {
      // Handle other errors
      throw new Error('Failed to create event: An unexpected error occurred')
    }
  }
}

export const useCreateEvent = () => {
  return useMutation({
    mutationFn: (payload: EventProps) => createEvent(payload),
    meta: {
      errorMessage: `Failed to create event.`,
      successMessage: `Successfully  created event.`,
    },
  })
}
