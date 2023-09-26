import { useMemo, useState } from 'react'

export type NotificationType = 'success' | 'error' | 'warning'

export default function useNotification() {
  const [show, setShow] = useState(false)
  const [type, setNotificationType] = useState<NotificationType>('warning')

  const value = useMemo(
    () => ({
      show,
      setShow,
      setNotificationType,
      type,
    }),
    [show, type],
  )

  return value
}
