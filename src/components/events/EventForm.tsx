import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '../buttons/Button'
import Input from '../inputs/Input'
import Textarea from '../inputs/Textarea'
import { EventProps } from '../../types/events'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router'

type FormValues = {
  eventName: string
  eventLocation: string
  eventDateAndTime: string
  eventDuration: number
  eventDescription: string
  eventDomain: string
  eventUrl: string
}

interface EventFormProps {
  event?: EventProps | null
  action: 'create' | 'edit' | 'view'
}

export default function EventForm({ event, action }: EventFormProps) {
  const navigate = useNavigate()
  const {
    getValues,
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm<FormValues>()

  const getEventObject = useCallback(
    (event: EventProps) => ({
      eventName: event.name,
      eventLocation: event.location,
      eventDateAndTime: event.dateAndTime,
      eventDuration: event.duration,
      eventDescription: event.description,
      eventUrl: event.customUrl,
    }),

    [],
  )

  useEffect(() => {
    if (event) {
      reset({ ...getEventObject(event) })
    }
    return () => {
      reset({})
    }
  }, [event, getEventObject, reset])

  const onSubmit: SubmitHandler<FormValues> = (data: unknown) =>
    console.log('onSubmit', data)

  const possibleLocations = [
    { id: 'virtual', title: 'Virtual' },
    { id: 'inPerson', title: 'In Person' },
  ]

  const buttonText =
    action === 'edit'
      ? 'Save Event'
      : action === 'create'
      ? 'Create Event'
      : 'Edit Event'

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-12 py-14"
    >
      <div className="space-y-2">
        <Input
          type="text"
          label="Event Name"
          {...register('eventName')}
          disabled={action === 'view'}
        />
      </div>
      <div className="space-y-2">
        <h2 className="text-[20px] font-semibold tracking-[0.3px]">Where</h2>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {possibleLocations.map((location) => (
            <div key={location.id} className="flex items-center">
              <input
                id={location.id}
                type="radio"
                defaultChecked={getValues('eventLocation') === location.title}
                className="disabled:ring-gray-200 h-4 w-4 border-gray-300 text-circle-blue-900 focus:ring-circle-blue-900 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                disabled={action === 'view'}
                {...register('eventLocation')}
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
            disabled={action === 'view'}
          />
          <div className="self-end">
            <label className="sr-only block">Duration (hours)</label>
            <select
              className="placeholder:text-input placeholder:text-grey-shade-placeholder block w-full rounded-md border border-secondary px-3 py-2.5 font-normal text-circle-grey-shade-medium placeholder:font-normal"
              placeholder="Duration"
              {...register('eventDuration')}
              disabled={action === 'view'}
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
          placeholder="Write a summary about your event"
          className="h-40 resize-none"
          {...register('eventDescription')}
          disabled={action === 'view'}
        />
      </div>
      <fieldset>
        <legend className="block text-sm font-medium text-circle-grey-shade-medium">
          Slug
        </legend>
        <div className="flex flex-row">
          <Input
            type="text"
            label="Event domain"
            hideLabel
            disabled
            value="yourdomain.com"
            className="basis-1/4 rounded-r-none"
            {...register('eventDomain')}
          />
          <Input
            type="text"
            label="Event URL"
            hideLabel
            className="basis-3/4 rounded-l-none"
            placeholder="custom URL"
            grow
            {...register('eventUrl')}
            disabled={action === 'view'}
          />
        </div>
      </fieldset>

      <div className="inline-flex gap-x-2">
        <Button
          className="place-self-start capitalize"
          type="submit"
          disabled={action !== 'edit' && action !== 'create'}
        >
          {buttonText}
        </Button>

        <Button
          className="place-self-start capitalize"
          onClick={() => navigate(-1)}
          type="button"
        >
          cancel
        </Button>
      </div>
    </form>
  )
}
