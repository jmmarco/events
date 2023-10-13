import { EventProps } from '../../../../types/events'
import { AxiosError } from 'axios'
import { apiService } from '../../../../api/apiService'
import { useState } from 'react'

interface UseCreateEventResponse {
  data: EventProps | null
  error: Error | null
  mutate: (event: EventProps) => Promise<EventProps | null>
}

export const useCreateEvent = (): UseCreateEventResponse => {
  const [data, setData] = useState<EventProps | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const createEvent = async (event: EventProps) => {
    try {
      const response = await apiService.createEvent(event)
      setData(response.data)
      return response.data
    } catch (error) {
      const axiosError = error as AxiosError
      setError(axiosError)
      return null
    }
  }

  return { mutate: createEvent, data, error }
}
