import {
  NotificationActionType,
  NotificationState,
} from '@reducers/notificationReducer'
import { createContext } from 'react'

type NotificationContextType = {
  notificationState: NotificationState
  dispatchNotification: React.Dispatch<NotificationActionType>
} | null

const NotificationContext = createContext<NotificationContextType>(null)

export default NotificationContext
