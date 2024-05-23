import { AxiosError } from 'axios'
import { apiService } from '@api/apiService'
import { useMutation } from '@tanstack/react-query'
import { EventProps } from '@customTypes/index'

async function editEvent(payload: EventProps) {
  try {
    const response = await apiService.editEvent(payload)

    if (response.status === 200) {
      return response.data
    } else {
      throw new Error(
        `Failed to edit event: Received status code ${response.status}`,
      )
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      // Handle Axios-specific errors
      throw new Error(
        `Failed to edit event: ${
          error.response?.data?.message || error.message
        }`,
      )
    } else {
      // Handle other errors
      throw new Error('Failed to edit event: An unexpected error occurred')
    }
  }
}

export const useEditEvent = () => {
  return useMutation({
    mutationFn: (payload: EventProps) => editEvent(payload),
    meta: {
      errorMessage: `Failed to edit event.`,
      successMessage: `Successfully edited event.`,
    },
  })
}
