import { useContext, useEffect, useState } from 'react'
import axiosInstance from '../api/axiosInstance'
import { EventProps } from '../types/events'
import LoaderContext from '../context/LoaderContext'
import { AxiosError } from 'axios'

interface UseGetAllEventsResponse {
  data: EventProps[] | null
  error: Error | null
}

export const useGetAllEvents = (): UseGetAllEventsResponse => {
  const [data, setData] = useState<EventProps[] | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const { setLoading } = useContext(LoaderContext)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axiosInstance.get('/events')
        setData(response.data)
      } catch (error) {
        const axiosError = error as AxiosError
        setError(axiosError)
      }
      setLoading(false)
    }

    fetchData()
  }, [setLoading])

  return { data, error }
}
