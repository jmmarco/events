import { apiService } from '@api/apiService'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { eventsQueryKeys } from 'query-keys/query-key-factory'

async function getEvent(id: string) {
  try {
    const response = await apiService.getEvent(id)

    if (response.status === 200) {
      return response.data
    } else {
      throw new Error(
        `Failed to get event: Received status code ${response.status}`,
      )
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      // Handle Axios-specific errors
      throw new Error(
        `Failed to get event: ${
          error.response?.data?.message || error.message
        }`,
      )
    } else {
      // Handle other errors
      throw new Error('Failed to get event: An unexpected error occurred')
    }
  }
}

export function useGetEvent(id: string) {
  return useQuery({
    queryKey: eventsQueryKeys.events(),
    queryFn: () => getEvent(id),
    meta: {
      errorMessage: 'Failed to fetch event.',
      successMessage: 'Event fetched successfully.',
    },
  })
}
