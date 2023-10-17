import { useContext, useState } from 'react'
import { AxiosError } from 'axios'
import { apiService } from '../../../api/apiService'
import LoaderContext from '../../../context/LoaderContext'
import { sleep } from '../../../helpers/utils'
import { EventProps } from '@customTypes/events/EventProps'

interface UseEditEventResponse {
  data: EventProps | null
  loading: boolean
  error: Error | null
  mutate: (event: EventProps) => Promise<EventProps | null>
}

export const useEditEvent = (): UseEditEventResponse => {
  const [data, setData] = useState<EventProps | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const { loading, setLoading } = useContext(LoaderContext)

  const editEvent = async (event: EventProps) => {
    const { id } = event
    const SIMULATED_NETWORK_DELAY = 2500
    setLoading(true)
    try {
      const response = await apiService.editEvent(String(id), event)
      setData(response.data)
      await sleep(SIMULATED_NETWORK_DELAY)
      setLoading(false)
      return response.data
    } catch (error) {
      const axiosError = error as AxiosError
      setError(axiosError)
      await sleep(SIMULATED_NETWORK_DELAY)
      setLoading(false)
      return null
    }
  }

  return { mutate: editEvent, data, loading, error }
}
