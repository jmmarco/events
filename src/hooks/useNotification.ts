import NotificationContext from '@context/NotificationContext'
import { useContext } from 'react'

export default function useNotification() {
  const context = useContext(NotificationContext)

  if (!context) {
    throw Error(
      '`useNotification` is supposed to be used inside of a `<NotificationContext.Provider />`, make sure that your component is a child of `<NotificationContext.Provider />`',
    )
  }

  return context
}
