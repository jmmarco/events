import { apiService } from '@api/apiService'
import { CircleEvent } from '@customTypes/index'
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { eventsQueryKeys } from 'query-keys/query-key-factory'

async function getAllEvents() {
  try {
    const response = await apiService.getEvents()

    if (response.status === 200) {
      return response.data
    } else {
      throw new Error(
        `Failed to get events: Received status code ${response.status}`,
      )
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      // Handle Axios-specific errors
      throw new Error(
        `Failed to get events: ${
          error.response?.data?.message || error.message
        }`,
      )
    } else {
      // Handle other errors
      throw new Error('Failed to get events: An unexpected error occurred')
    }
  }
}

export function useGetAllEvents(): UseQueryResult<CircleEvent[], Error> {
  return useQuery({
    queryKey: eventsQueryKeys.events(),
    queryFn: () => getAllEvents(),
    staleTime: 1000 * 60 * 15, // 15 minutes
    meta: {
      errorMessage: 'Failed to fetch events.',
      successMessage: 'Events fetched successfully.',
    },
  })
}
