import { useMemo, useState } from 'react'

export type NotificationType = 'success' | 'error' | 'warning'

/**
 * Hook for managing pop up notifications.
 *
 * @returns {object} Notification state and functions.
 * @property {boolean} show - Whether the notification is currently displayed.
 * @property {function(boolean)} setShow - Function to toggle the notification display.
 * @property {NotificationType} notificationType - The type of notification ('success', 'error' or 'warning').
 * @property {function(NotificationType)} setNotificationType - Function to set the notification type.
 * @property {string} notificationText - The text content of the notification.
 * @property {function(string)} setNotificationText - Function to set the notification text.
 */

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
