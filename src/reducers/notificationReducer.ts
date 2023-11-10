import { Reducer } from 'react'

export type NotificationState = {
  text: string
  notificationType: 'warning' | 'success' | 'error'
  show?: boolean
}

export type NotificationActionType = {
  type: 'SHOW' | 'HIDE'
  payload?: NotificationState
}

const notificationReducer: Reducer<
  NotificationState,
  NotificationActionType
> = (state, action) => {
  console.log('Aha')
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
