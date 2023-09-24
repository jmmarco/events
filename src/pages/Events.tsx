import { useEffect, useState } from 'react'

import EventHeader from '../components/events/EventHeader'
import EventMain from '../components/events/EventMain'
import { EventProps } from '../types/events'
import { VITE_API_URL } from '../constants'
import EventCardList from '../components/cards/EventCardList'
import useFetch from '../hooks/useFetch'

export default function Events() {
  const eventsEndpointUrl = `${VITE_API_URL}/events`

  const { data: events } = useFetch<EventProps[] | null>({
    url: eventsEndpointUrl,
    initialState: null,
  })

  return (
    <div className="h-full bg-circle-grey-background">
      <EventHeader headingTitle="Events" />
      <EventMain>
        <EventCardList events={events} />
      </EventMain>
    </div>
  )
}
