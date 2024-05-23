import { SetActionType } from '@reducers/actionReducer'

export interface EventFormProps {
  event?: CircleEvent | null
  action: 'edit' | 'view' | 'create'
  dispatch: React.Dispatch<SetActionType>
}

export interface CircleEvent {
  id: number
  name: string
  location: string
  dateAndTime: string
  duration: number
  description: string
  customUrl: string
}
