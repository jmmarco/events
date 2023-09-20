import { useNavigate } from 'react-router'
import { EventProps } from '../../types/events'

interface EventCardProps {
  event: EventProps
}

export default function EventCard({ event }: EventCardProps) {
  const navigate = useNavigate()
  const imgSrc =
    event.location === 'Virtual'
      ? '/event-virtual-logo.svg'
      : '/event-in-person.svg'

  return (
    <div
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
    </div>
  )
}
