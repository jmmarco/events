import { useEffect, useState } from 'react'

import EventHeader from '../components/events/EventHeader'
import EventMain from '../components/events/EventMain'
import { EventProps } from '../types/events'
import api from '../helpers/api'
import { VITE_API_URL } from '../constants'
import EventCard from '../components/cards/EventCard'

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
        <div className="flex justify-between gap-4 py-20">
          {events?.map((event) => <EventCard key={event.id} event={event} />)}
        </div>
      </EventMain>
    </div>
  )
}
