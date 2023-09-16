import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '../buttons/Button'

type FormValues = {
  eventName: string
  eventLocation: string
  eventDateAndTime: string
  eventDuration: string
  eventDescription: string
  eventDomain: string
  eventUrl: string
}

export default function EventForm() {
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data: unknown) =>
    console.log(data)

  const possibleLocations = [
    { id: 'virtual', title: 'Virtual' },
    { id: 'inPerson', title: 'In Person' },
  ]

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-12 py-14"
    >
      <div className="space-y-2">
        <label className="block">Event name</label>
        <input
          className="w-full rounded-md  border border-secondary px-3 py-2 text-input placeholder:text-input placeholder:font-normal placeholder:text-grey-shade-placeholder"
          placeholder="Event name"
          {...register('eventName')}
        />
      </div>
      <div className="space-y-2">
        <h2 className="text-[20px] font-semibold tracking-[0.3px]">Where</h2>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {possibleLocations.map((location) => (
            <div key={location.id} className="flex items-center">
              <input
                id={location.id}
                name="location"
                type="radio"
                defaultChecked={location.id === 'virtual'}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor={location.id}
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                {location.title}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-[20px] font-semibold tracking-[0.3px]">Where</h2>
        <label>Set date and time</label>
        <div className="grid grid-cols-2 gap-x-4">
          <input
            type="date"
            className="rounded-md border border-secondary px-3 py-2 placeholder:text-input placeholder:font-normal placeholder:text-grey-shade-placeholder"
            {...register('eventDateAndTime')}
          />
          <select
            className="rounded-md border border-secondary px-3 py-2 placeholder:text-input placeholder:font-normal placeholder:text-grey-shade-placeholder"
            placeholder="Duration"
            {...register('eventDuration')}
          >
            <option value="">Duration</option>
            {Array.from({ length: 24 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label>Event description</label>
        <textarea
          className="w-full resize-none rounded-md border border-secondary px-3 py-2 placeholder:text-input placeholder:font-normal placeholder:text-grey-shade-placeholder focus:ring-2 focus:ring-inset focus:ring-circle-blue"
          placeholder="Write a summary about your event"
          {...register('eventDescription')}
        />
      </div>
      <fieldset className="space-y-2">
        <legend>Slug</legend>
        <div className="flex">
          <label className="sr-only">Event Domain</label>
          <input
            className="basis-1/4 rounded-md rounded-r-none border-secondary px-3 py-2 placeholder:text-input placeholder:font-normal placeholder:text-grey-shade-placeholder focus:ring-2 focus:ring-inset focus:ring-circle-blue"
            placeholder="yourdomain.com"
            {...register('eventDomain')}
          />
          <label className="sr-only">Event URL</label>
          <input
            className="basis-3/4 rounded-md rounded-l-none border border-secondary px-3 py-2 placeholder:text-input placeholder:font-normal placeholder:text-grey-shade-placeholder focus:ring-2 focus:ring-inset focus:ring-circle-blue"
            placeholder="custom URL"
            {...register('eventUrl')}
          />
        </div>
      </fieldset>
      <Button
        className="text-circle-button place-self-start rounded-md bg-circle-blue px-[18px] py-2.5 font-bold leading-[19.09px] tracking-wide text-white"
        type="submit"
      >
        Create event
      </Button>
    </form>
  )
}
