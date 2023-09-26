import { createContext } from 'react'
import { NotificationType } from '../hooks/useNotification'

type NotificationContextProps = {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  type?: 'success' | 'error' | 'warning'
  setNotificationType: React.Dispatch<React.SetStateAction<NotificationType>>
}

const NotificationContext = createContext<NotificationContextProps>({
  show: false,
  setShow: () => {},
  setNotificationType: () => {},
  type: 'warning',
})

export default NotificationContext
