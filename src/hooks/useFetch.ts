import { useContext, useEffect, useState } from 'react'
import LoaderContext from '../context/LoaderContext'

interface UseFetchProps<T> {
  url: string
  initialState: T
}

export default function useFetch<T>({ url, initialState }: UseFetchProps<T>) {
  const { loading, setLoading } = useContext(LoaderContext)
  const [data, setData] = useState(initialState)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const data = await response.json()
        setData(data)
      } catch (error) {
        setError(error as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url, setLoading])

  return {
    data,
    loading,
    error,
  }
}
