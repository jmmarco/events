import { Reducer } from 'react'

type NotificationType = 'warning' | 'success' | 'error'

export type NotificationState = {
  show: boolean
  text: string
  notificationType: NotificationType
}

export type NotificationActionType =
  | {
      type: 'SHOW'
      payload?: {
        text: string
        notificationType: NotificationType
      }
    }
  | {
      type: 'HIDE'
    }

const notificationReducer: Reducer<
  NotificationState,
  NotificationActionType
> = (state, action) => {
  switch (action.type) {
    case 'SHOW':
      return { ...state, ...action.payload, show: true }
    case 'HIDE':
      return { ...state, show: false }
    default:
      return state
  }
}

export default notificationReducer
