import { AxiosError } from 'axios'
import { apiService } from '@api/apiService'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CircleEvent } from '@customTypes/index'
import { eventsQueryKeys } from 'query-keys/query-key-factory'

async function editEvent(payload: CircleEvent) {
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
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (payload: CircleEvent) => editEvent(payload),
    onSuccess: (updatedEvent) => {
      const { id } = updatedEvent
      queryClient.invalidateQueries({
        queryKey: eventsQueryKeys.event(id),
      })
    },
    meta: {
      errorMessage: `Failed to edit event.`,
      successMessage: `Successfully edited event.`,
    },
  })
}
