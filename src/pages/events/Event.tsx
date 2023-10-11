import { useNavigate, useParams } from 'react-router'
import EventForm from '../../components/events/EventForm'
import EventHeader from '../../components/events/EventHeader'
import EventMain from '../../components/events/EventMain'
import { useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary'
import useSetDocumentTitle from '../../hooks/useSetDocumentTitle'
import { useGetEvent } from './hooks/queries/useGetEvent'

export type EventActionType = 'create' | 'edit' | 'view' | null

export default function Event() {
  const { eventId } = useParams()
  const { showBoundary } = useErrorBoundary()
  const navigate = useNavigate()
  const [action, setAction] = useState<EventActionType>('view')
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
        buttonActionText={action === 'view' ? 'edit' : null}
        buttonActionHandleClick={() => setAction('edit')}
        buttonCloseHandleClick={() => navigate('/events')}
      />
      <EventMain>
        <EventForm event={event} action={action} />
      </EventMain>
    </>
  )
}
