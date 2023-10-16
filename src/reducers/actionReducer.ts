import { Reducer } from 'react'

import { EventActionType } from '../pages/events/Event'

type ActionState = EventActionType

export type Action = { type: 'SET_ACTION'; payload: ActionState }

const actionReducer: Reducer<ActionState, Action> = (state, action) => {
  switch (action.type) {
    case 'SET_ACTION':
      return action.payload
    default:
      return state
  }
}

export default actionReducer
