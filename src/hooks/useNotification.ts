import { useMemo, useState } from 'react'

export type NotificationType = 'success' | 'error' | 'warning'

export default function useNotification() {
  const [show, setShow] = useState(false)
  const [notificationType, setNotificationType] =
    useState<NotificationType>('warning')
  const [notificationText, setNotificationText] = useState('')

  const value = useMemo(
    () => ({
      show,
      setShow,
      notificationText,
      setNotificationText,
      notificationType,
      setNotificationType,
    }),
    [show, notificationText, notificationType],
  )

  return value
}
