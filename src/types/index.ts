import { SetActionType } from '@reducers/actionReducer'

export interface EventFormProps {
  event?: EventProps | null
  action: 'edit' | 'view' | 'create'
  dispatch: React.Dispatch<SetActionType>
}

export interface EventProps {
  id: number
  name: string
  location: string
  dateAndTime: string
  duration: number
  description: string
  customUrl: string
}
