import { useEffect, useState } from 'react'

interface UseFetchProps<T> {
  url: string
  initialState: T
}

export default function useFetch<T>({ url, initialState }: UseFetchProps<T>) {
  const [data, setData] = useState(initialState)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

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
  }, [url])

  return {
    data,
    loading,
    error,
  }
}
