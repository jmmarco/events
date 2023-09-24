import { useContext, useEffect, useState } from 'react'
import LoaderContext from '../components/LoaderContext'

interface UseFetchProps<T> {
  url: string
  initialState: T
}

export default function useFetch<T>({ url, initialState }: UseFetchProps<T>) {
  const { loading, setLoading } = useContext(LoaderContext)
  const [data, setData] = useState(initialState)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [url, setLoading])

  return {
    data,
    loading,
    error,
  }
}
