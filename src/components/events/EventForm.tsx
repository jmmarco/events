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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-12 py-14"
    >
      <div className="space-y-2">
        <label className="block">Event name</label>
        <input
          className="border w-full  border-secondary px-3 py-2 rounded-md placeholder:text-grey-shade-placeholder placeholder:text-[15px] placeholder:font-normal"
          placeholder="Event name"
          {...register('eventName')}
        />
      </div>

      <div className="space-y-2">
        <label>Set date and time</label>
        <div className="grid grid-cols-2 gap-x-4">
          <input
            type="date"
            className="border border-secondary px-3 py-2 rounded-md placeholder:text-grey-shade-placeholder placeholder:text-[15px] placeholder:font-normal"
            {...register('eventDateAndTime')}
          />
          <select
            className="border border-secondary px-3 py-2 rounded-md placeholder:text-grey-shade-placeholder placeholder:text-[15px] placeholder:font-normal"
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
          className="border w-full border-secondary px-3 py-2 rounded-md resize-none placeholder:text-grey-shade-placeholder placeholder:text-[15px] placeholder:font-normal"
          placeholder="Write a summary about your event"
          {...register('eventDescription')}
        />
      </div>
      <div className="space-y-2">
        <label>Slug</label>
        <div className="flex">
          <input
            className="basis-1/4 border border-secondary px-3 py-2 rounded-md rounded-r-none placeholder:text-grey-shade-placeholder placeholder:text-[15px] placeholder:font-normal"
            placeholder="yourdomain.com"
            {...register('eventDomain')}
          />
          <input
            className="basis-3/4 border border-secondary px-3 py-2 rounded-md rounded-l-none placeholder:text-grey-shade-placeholder placeholder:text-[15px] placeholder:font-normal"
            placeholder="custom URL"
            {...register('eventDomain')}
          />
        </div>
      </div>
      <Button
        className="bg-circle-blue text-white font-bold text-[16px] leading-[19.09px] tracking-wide rounded-md place-self-start py-2.5 px-[18px]"
        type="submit"
      >
        Create event
      </Button>
    </form>
  )
}
