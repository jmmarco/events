import EventForm from '../../components/events/EventForm'
import EventHeader from '../../components/events/EventHeader'
import EventMain from '../../components/events/EventMain'
import useSetDocumentTitle from '../../hooks/useSetDocumentTitle'

export default function NewEvent() {
  useSetDocumentTitle('New Event')
  return (
    <>
      <EventHeader headingTitle="New Event" />
      <EventMain>
        <EventForm action="create" />
      </EventMain>
    </>
  )
}
