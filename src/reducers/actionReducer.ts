import { Reducer } from 'react'
import { EventActionType } from '@customTypes/events/EventActionType';


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
