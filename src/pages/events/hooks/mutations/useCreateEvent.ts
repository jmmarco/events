import { useContext, useState } from 'react'
import { EventProps } from '../../../../types/events'
import LoaderContext from '../../../../context/LoaderContext'
import { AxiosError } from 'axios'
import { apiService } from '../../../../api/apiService'

interface UseCreateEventResponse {
  data: EventProps | null
  error: Error | null
  mutate: (event: EventProps) => Promise<EventProps | null>
}

export const useCreateEvent = (): UseCreateEventResponse => {
  const [data, setData] = useState<EventProps | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const { setLoading } = useContext(LoaderContext)

  const createEvent = async (event: EventProps) => {
    setLoading(true)
    try {
      const response = await apiService.createEvent(event)
      setData(response.data)
    } catch (error) {
      const axiosError = error as AxiosError
      setError(axiosError)
    }
    setLoading(false)

    return data
  }

  return { mutate: createEvent, data, error }
}
