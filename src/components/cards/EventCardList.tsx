import { useNavigate } from 'react-router'
import { EventProps } from '../../types/events'

interface EventCardListProps {
  events: EventProps[] | null
}

export default function EventCardList({ events }: EventCardListProps) {
  const navigate = useNavigate()

  return (
    <ul className="flex justify-between gap-4 py-20">
      {events?.map((event) => {
        const imgSrc =
          event.location === 'Virtual'
            ? '/event-virtual-logo.svg'
            : '/event-in-person.svg'
        return (
          <li
            key={event.id}
            className="flex max-w-xs cursor-pointer items-center space-x-4 rounded-xl bg-white p-6 shadow-lg"
            onClick={() => {
              navigate(`/events/${event.id}`)
            }}
          >
            <div className="shrink-0">
              <img className="h-12 w-12" src={imgSrc} alt="Event Logo" />
            </div>
            <div>
              <p className="text-xl font-medium text-black">{event.name}</p>
              <p className="text-slate-500">{event.duration} hours</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
