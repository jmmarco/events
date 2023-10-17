import { useReducer } from 'react'
import EventForm from '../../components/events/EventForm'
import EventHeader from '../../components/events/EventHeader'
import EventMain from '../../components/events/EventMain'
import useSetDocumentTitle from '../../hooks/useSetDocumentTitle'
import actionReducer from '../../reducers/actionReducer'


export default function NewEvent() {
  const [action, dispatch] = useReducer(actionReducer, 'create')

  useSetDocumentTitle('New Event')
  return (
    <>
      <EventHeader headingTitle="New Event" />
      <EventMain>
        <EventForm action={action} dispatch={dispatch} />
      </EventMain>
    </>
  )
}
