import { useContext, useState } from 'react'
import { EventProps } from '../../../../types/events'
import LoaderContext from '../../../../context/LoaderContext'
import { AxiosError } from 'axios'
import { apiService } from '../../../../api/apiService'

interface UseEditEventResponse {
  data: EventProps | null
  error: Error | null
  mutate: (event: EventProps) => Promise<void>
}

export const useEditEvent = (): UseEditEventResponse => {
  const [data, setData] = useState<EventProps | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const { setLoading } = useContext(LoaderContext)

  const editEvent = async (event: EventProps) => {
    const { id } = event
    setLoading(true)
    try {
      const response = await apiService.editEvent(String(id), event)
      setData(response.data)
    } catch (error) {
      const axiosError = error as AxiosError
      setError(axiosError)
    }
    setLoading(false)
  }

  return { mutate: editEvent, data, error }
}
