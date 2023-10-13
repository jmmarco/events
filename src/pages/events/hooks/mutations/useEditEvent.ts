import { useState } from 'react'
import { EventProps } from '../../../../types/events'
import { AxiosError } from 'axios'
import { apiService } from '../../../../api/apiService'

interface UseEditEventResponse {
  data: EventProps | null
  error: Error | null
  mutate: (event: EventProps) => Promise<EventProps | null>
}

export const useEditEvent = (): UseEditEventResponse => {
  const [data, setData] = useState<EventProps | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const editEvent = async (event: EventProps) => {
    const { id } = event
    try {
      const response = await apiService.editEvent(String(id), event)
      setData(response.data)
      return response.data
    } catch (error) {
      const axiosError = error as AxiosError
      setError(axiosError)
      return null
    }
  }

  return { mutate: editEvent, data, error }
}
