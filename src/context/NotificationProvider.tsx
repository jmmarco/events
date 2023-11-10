import { useReducer } from 'react'
import NotificationContext from './NotificationContext'
import notificationReducer, {
  NotificationActionType,
  NotificationState,
} from '@reducers/notificationReducer'

interface NotificationProviderProps {
  children: React.ReactNode
}

export default function NotificationProvider({
  children,
}: NotificationProviderProps) {
  const [notificationState, dispatchNotification] = useReducer<
    React.Reducer<NotificationState, NotificationActionType>
  >(notificationReducer, { show: false, text: '', notificationType: 'warning' })

  return (
    <NotificationContext.Provider
      value={{ notificationState, dispatchNotification }}
    >
      {children}
    </NotificationContext.Provider>
  )
}
