import EventForm from '../components/events/EventForm'
import EventHeader from '../components/events/EventHeader'
import EventMain from '../components/events/EventMain'

export default function NewEvent() {
  return (
    <div className="bg-circle-grey-background">
      <EventHeader />
      <EventMain>
        <EventForm />
      </EventMain>
    </div>
  )
}
