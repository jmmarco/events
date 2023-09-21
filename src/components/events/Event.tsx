import { useNavigate, useParams } from 'react-router'
import EventForm from './EventForm'
import EventHeader from './EventHeader'
import EventMain from './EventMain'
import { useEffect, useState } from 'react'
import { EventProps } from '../../types/events'
import api from '../../helpers/api'
import { VITE_API_URL } from '../../constants'

type ActionProps = 'create' | 'edit' | 'view'

export default function Event() {
  const { eventId } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState<EventProps | null>(null)
  const [action, setAction] = useState<ActionProps>('view')

  useEffect(() => {
    const singleEventEndpointUrl = `${VITE_API_URL}/events/${eventId}`

    api(singleEventEndpointUrl).then((data) => {
      setEvent(data as EventProps)
    })
  }, [eventId])

  const title = action === 'edit' ? 'Edit Event' : 'Event Details'

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
