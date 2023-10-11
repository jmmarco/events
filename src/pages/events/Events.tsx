import EventHeader from '../../components/events/EventHeader'
import EventMain from '../../components/events/EventMain'
import EventCardList from '../../components/cards/EventCardList'
import { useErrorBoundary } from 'react-error-boundary'
import useSetDocumentTitle from '../../hooks/useSetDocumentTitle'
import { useNavigate } from 'react-router'
import { useGetAllEvents } from './hooks/queries/useGetAllEvents'

export default function Events() {
  useSetDocumentTitle('Events')
  const navigate = useNavigate()
  const { showBoundary } = useErrorBoundary()

  const navigateNewEvent = () => {
    const newEventRoute = `/events/new`
    navigate(newEventRoute)
  }

  const { data: events, error } = useGetAllEvents()

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
