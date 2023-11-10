import { Reducer } from 'react'

type NotificationType = 'warning' | 'success' | 'error'

type NotificationState = {
  show: boolean
  text: string
  notificationType: NotificationType
}

export type NotificationActionType = {
  type: 'SHOW' | 'HIDE'
  payload: {
    text: string
    notificationType: NotificationType
  }
}

const notificationReducer: Reducer<
  NotificationState,
  NotificationActionType
> = (state, action) => {
  switch (action.type) {
    case 'SHOW':
      return { ...state, ...action.payload, show: true }

    case 'HIDE':
      return { ...state, ...action.payload, show: false }
    default:
      return state
  }
}

export default notificationReducer
