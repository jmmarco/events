import EventHeader from '../components/events/EventHeader'
import EventMain from '../components/events/EventMain'
import { EventProps } from '../types/events'
import { VITE_API_URL } from '../constants'
import EventCardList from '../components/cards/EventCardList'
import useFetch from '../hooks/useFetch'
import { useErrorBoundary } from 'react-error-boundary'
import useSetDocumentTitle from '../hooks/useSetDocumentTitle'
import { useNavigate } from 'react-router'

export default function Events() {
  useSetDocumentTitle('Events')
  const navigate = useNavigate()
  const { showBoundary } = useErrorBoundary()
  const eventsEndpointUrl = `${VITE_API_URL}/events`

  const navigateNewEvent = () => {
    const newEventRoute = `/events/new`
    navigate(newEventRoute)
  }

  const { data: events, error } = useFetch<EventProps[] | null>({
    url: eventsEndpointUrl,
    initialState: null,
  })

  if (error) {
    showBoundary(error)
  }

  return (
    <>
      <EventHeader
        headingTitle="Events"
        buttonActionText="create"
        buttonActionHandleClick={navigateNewEvent}
      />
      <EventMain>
        <EventCardList events={events} />
      </EventMain>
    </>
  )
}
