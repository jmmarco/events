import { useContext, useEffect, useState } from 'react'
import axiosInstance from '../api/axiosInstance'
import { EventProps } from '../types/events'
import LoaderContext from '../context/LoaderContext'

interface UseGetAllEventsResponse {
  data: EventProps[] | null
  error: Error | null
}

const getAllEvents = async () => {
  const response = await axiosInstance.get('/events')

  if (response.status !== 200) {
    throw new Error('Error fetching events')
  }
  return response
}

export const useGetAllEvents = (): UseGetAllEventsResponse => {
  const [data, setData] = useState<EventProps[] | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const { setLoading } = useContext(LoaderContext)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await getAllEvents()
        setData(response.data)
      } catch (error) {
        setError(error as Error)
      }
      setLoading(false)
    }

    fetchData()
  }, [setLoading])

  return { data, error }
}
