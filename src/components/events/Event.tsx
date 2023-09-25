import { useNavigate, useParams } from 'react-router'
import EventForm from './EventForm'
import EventHeader from './EventHeader'
import EventMain from './EventMain'
import { useState } from 'react'
import { EventProps } from '../../types/events'
import { VITE_API_URL } from '../../constants'
import useFetch from '../../hooks/useFetch'
import { useErrorBoundary } from 'react-error-boundary'

type ActionProps = 'create' | 'edit' | 'view'

export default function Event() {
  const { eventId } = useParams()
  const { showBoundary } = useErrorBoundary()
  const navigate = useNavigate()
  const [action, setAction] = useState<ActionProps>('view')
  const singleEventEndpointUrl = `${VITE_API_URL}/events/${eventId}`
  const title = action === 'edit' ? 'Edit Event' : 'Event Details'

  const { data: event, error } = useFetch<EventProps | null>({
    url: singleEventEndpointUrl,
    initialState: null,
  })

  if (error) {
    showBoundary(error)
  }

  return (
    <div className="bg-circle-grey-background">
      <EventHeader
        headingTitle={title}
        buttonActionText={action}
        buttonActionHandleClick={() => setAction('edit')}
        buttonCloseHandleClick={() => navigate('/events')}
      />
      <EventMain>
        <EventForm event={event} action={action} />
      </EventMain>
    </div>
  )
}
