
import { useNavigate } from 'react-router'
import { useErrorBoundary } from 'react-error-boundary'
import EventCardList from '../../components/cards/EventCardList'
import EventHeader from '../../components/events/EventHeader'
import EventMain from '../../components/events/EventMain'
import useSetDocumentTitle from '../../hooks/useSetDocumentTitle'
import { useGetAllEvents } from '@hooks/events/queries/useGetAllEvents'


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
