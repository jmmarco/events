import { EventActionType } from '@pages/events/Event'
import { Reducer } from 'react'

type ActionState = EventActionType

export type SetActionType = { type: 'SET_ACTION'; payload: ActionState }

const actionReducer: Reducer<ActionState, SetActionType> = (state, action) => {
  switch (action.type) {
    case 'SET_ACTION':
      return action.payload
    default:
      return state
  }
}

export default actionReducer
