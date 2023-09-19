import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '../buttons/Button'
import Input from '../inputs/Input'
import Textarea from '../inputs/Textarea'

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
        <Input name="event-name" type="text" label="Event Name" />
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
                className="h-4 w-4 border-gray-300 text-circle-blue-900 focus:ring-circle-blue-900"
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
        <h2 className="text-[20px] font-semibold tracking-[0.3px]">When</h2>
        <div className="grid grid-cols-2 gap-x-2">
          <Input
            type="date"
            label="Set date and time"
            {...register('eventDateAndTime')}
          />
          <div className="self-end">
            <label className="sr-only block">Duration (hours)</label>
            <select
              className="placeholder:text-input placeholder:text-grey-shade-placeholder block w-full rounded-md border border-secondary px-3 py-2.5 font-normal text-circle-grey-shade-medium placeholder:font-normal"
              placeholder="Duration"
              {...register('eventDuration')}
            >
              <option value="">Duration (hours)</option>
              {Array.from({ length: 6 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <Textarea
          label="Event Description"
          name="event-description"
          placeholder="Write a summary about your event"
          className="h-40 resize-none"
        />
      </div>
      <fieldset>
        <legend className="block text-sm font-medium text-circle-grey-shade-medium">
          Slug
        </legend>
        <div className="flex flex-row">
          <Input
            type="text"
            name="domain-url"
            disabled
            value="yourdomain.com"
            className="basis-1/4 rounded-r-none"
          />
          <Input
            type="text"
            className="basis-3/4 rounded-l-none"
            placeholder="custom URL"
            grow="true"
            {...register('eventUrl')}
          />
        </div>
      </fieldset>
      <Button className="place-self-start" type="submit">
        Create event
      </Button>
    </form>
  )
}
