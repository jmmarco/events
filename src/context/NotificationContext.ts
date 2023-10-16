import { createContext } from 'react'
import { NotificationType } from '../hooks/useNotification'



type NotificationContextProps = {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  notificationText?: string
  setNotificationText: React.Dispatch<React.SetStateAction<string>>
  notificationType?: NotificationType
  setNotificationType: React.Dispatch<React.SetStateAction<NotificationType>>
}

const NotificationContext = createContext<NotificationContextProps>({
  show: false,
  setShow: () => {},
  setNotificationText: () => {},
  notificationType: 'warning',
  setNotificationType: () => {},
})

export default NotificationContext
