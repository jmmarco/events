import { EventProps } from '@customTypes/index'
import { useNavigate } from 'react-router'

interface EventCardListProps {
  events: EventProps[]
}

export default function EventCardList({ events }: EventCardListProps) {
  const navigate = useNavigate()

  return (
    <ul className="flex flex-col gap-4 py-20 md:flex-row md:flex-wrap md:justify-between">
      {events?.map((event) => {
        const imgSrc =
          event.location === 'Virtual'
            ? '/event-virtual-logo.svg'
            : '/event-in-person.svg'
        return (
          <li
            key={event.id}
            className="flex w-64 min-w-full cursor-pointer items-center rounded-md  bg-white p-8 shadow-lg md:min-w-min"
            onClick={() => {
              navigate(`/events/${event.id}`)
            }}
          >
            <div className="mr-4 shrink-0">
              <img className="h-12 w-12" src={imgSrc} alt="Event Logo" />
            </div>
            <div>
              <p
                className="w-36 overflow-hidden truncate text-xl font-medium"
                title={event.name}
              >
                {event.name}
              </p>
              <p className="text-slate-500">{event.duration} hours</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
