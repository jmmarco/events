import { apiService } from '@api/apiService'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { eventsQueryKeys } from 'query-keys/query-key-factory'

async function getAllEvents() {
  try {
    const response = await apiService.getEvents()

    if (response.status === 200) {
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

export function useGetAllEvents() {
  return useQuery({
    queryKey: eventsQueryKeys.events(),
    queryFn: () => getAllEvents(),
    meta: {
      errorMessage: 'Failed to fetch events.',
      successMessage: 'Events fetched successfully.',
    },
  })
}
