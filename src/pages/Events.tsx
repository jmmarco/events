import { useEffect, useState } from 'react'

import EventHeader from '../components/events/EventHeader'
import EventMain from '../components/events/EventMain'
import { EventProps } from '../types/events'
import api from '../helpers/api'
import { VITE_API_URL } from '../constants'
import EventCardList from '../components/cards/EventCardList'

export default function Events() {
  const [events, setEvent] = useState<EventProps[] | null>(null)

  useEffect(() => {
    const eventsEndpointUrl = `${VITE_API_URL}/events`

    api(eventsEndpointUrl).then((data) => {
      setEvent(data as EventProps[])
    })
  }, [])

  return (
    <div className="h-full bg-circle-grey-background">
      <EventHeader headingTitle="Events" />
      <EventMain>
        <EventCardList events={events} />
      </EventMain>
    </div>
  )
}
