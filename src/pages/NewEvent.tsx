import EventForm from '../components/events/EventForm'
import EventHeader from '../components/events/EventHeader'
import EventMain from '../components/events/EventMain'

export default function NewEvent() {
  return (
    <div className="bg-grey-dark">
      <EventHeader />
      <EventMain>
        <EventForm />
      </EventMain>
    </div>
  )
}
