import { useMemo, useState } from 'react'

export default function useLoading(defaultState = false) {
  const [loading, setLoading] = useState(defaultState)

  const value = useMemo(
    () => ({
      loading,
      setLoading,
    }),
    [loading],
  )

  return value
}
