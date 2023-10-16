
import { useContext, useState } from 'react'
import { AxiosError } from 'axios'
import { apiService } from '../../../api/apiService'
import LoaderContext from '../../../context/LoaderContext'
import { sleep } from '../../../helpers/utils'
import { EventProps } from '../../../types/events'


interface UseCreateEventResponse {
  data: EventProps | null
  loading: boolean
  error: Error | null
  mutate: (event: EventProps) => Promise<EventProps | null>
}

export const useCreateEvent = (): UseCreateEventResponse => {
  const [data, setData] = useState<EventProps | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const { loading, setLoading } = useContext(LoaderContext)
  const SIMULATED_NETWORK_DELAY = 2500

  const createEvent = async (event: EventProps) => {
    setLoading(true)
    try {
      const response = await apiService.createEvent(event)
      setData(response.data)
      await sleep(SIMULATED_NETWORK_DELAY)
      setLoading(false)
      return response.data
    } catch (error) {
      const axiosError = error as AxiosError
      setError(axiosError)
      setLoading(false)
      return null
    }
  }

  return { mutate: createEvent, data, loading, error }
}
