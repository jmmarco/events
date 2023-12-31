import { useContext, useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import { EventProps } from '@customTypes/events/EventProps'
import LoaderContext from '@context/LoaderContext'
import { apiService } from '@api/apiService'

interface UseGetAllEventsResponse {
  data: EventProps | null
  loading: boolean
  error: Error | null
}

export const useGetEvent = (id: string): UseGetAllEventsResponse => {
  const [data, setData] = useState<EventProps | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const { loading, setLoading } = useContext(LoaderContext)

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true)
      try {
        const response = await apiService.getEvent(id)
        setData(response.data)
      } catch (error) {
        const axiosError = error as AxiosError
        setError(axiosError)
      }
      setLoading(false)
    }

    fetchEvent()
  }, [id, setLoading])

  return { data, loading, error }
}
