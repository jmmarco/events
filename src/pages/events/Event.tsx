import { useNavigate, useParams } from 'react-router'
import { useReducer } from 'react'
import { useErrorBoundary } from 'react-error-boundary'
import actionReducer from '@reducers/actionReducer'
import { useGetEvent } from '@hooks/events/queries/useGetEvent'
import useSetDocumentTitle from '@hooks/useSetDocumentTitle'
import EventHeader from '@components/events/EventHeader'
import EventMain from '@components/events/EventMain'
import EventForm from '@components/events/EventForm'

export type EventActionType = 'create' | 'edit' | 'view'

export default function Event() {
  const { eventId } = useParams()
  const { showBoundary } = useErrorBoundary()
  const navigate = useNavigate()
  const [action, dispatch] = useReducer(actionReducer, 'view')
  const title = action === 'edit' ? 'Edit Event' : 'Event Details'

  if (!eventId) {
    throw new Error('Event ID is required')
  }

  const { data: event, error } = useGetEvent(eventId)

  if (error) {
    showBoundary(error)
  }

  useSetDocumentTitle(`Event: ${event?.name}`)

  return (
    <>
      <EventHeader
        headingTitle={title}
        buttonActionText={action === 'view' ? 'edit' : undefined}
        buttonActionHandleClick={() =>
          dispatch({ type: 'SET_ACTION', payload: 'edit' })
        }
        buttonCloseHandleClick={() => navigate('/events')}
      />
      <EventMain>
        <EventForm event={event} action={action} dispatch={dispatch} />
      </EventMain>
    </>
  )
}
