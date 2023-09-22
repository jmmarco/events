import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Button from '../buttons/Button'
import Input from '../inputs/Input'
import Textarea from '../inputs/Textarea'
import { EventProps } from '../../types/events'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router'
import LocationRadioGroup from '../inputs/LocationRadioGroup'
import SelectMenu from '../inputs/SelectMenu'

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
    control,
    // getValues,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      eventName: '',
      eventLocation: 'Virtual',
      eventDateAndTime: '',
      eventDuration: 1,
      eventDescription: '',
      eventUrl: '',
    },
  })

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
  }, [event, getEventObject, reset])

  const onSubmit: SubmitHandler<FormValues> = (data: unknown) =>
    console.log('onSubmit', data)

  const buttonText =
    action === 'edit'
      ? 'Save Event'
      : action === 'create'
      ? 'Create Event'
      : 'Edit Event'

  const isDisabled = action === 'view'

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-12 py-14"
    >
      <div className="space-y-2">
        <Input
          type="text"
          label="Event Name"
          {...register('eventName', { required: 'Event name is required' })}
          error={errors?.eventName}
          disabled={isDisabled}
          intent={errors?.eventName && 'error'}
        />
      </div>
      <div className="space-y-2">
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          <Controller
            render={({ field }) => (
              <LocationRadioGroup {...field} disabled={isDisabled} />
            )}
            control={control}
            name="eventLocation"
          />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-[20px] font-semibold tracking-[0.3px]">When</h2>
        <div className="grid grid-cols-2 gap-x-2">
          <Input
            type="date"
            label="Set date and time"
            {...register('eventDateAndTime')}
            disabled={isDisabled}
          />
          <div className="self-end">
            <Controller
              render={({ field }) => (
                <SelectMenu
                  {...field}
                  label="Duration"
                  disabled={isDisabled}
                  items={[1, 2, 3, 4, 5, 6]}
                />
              )}
              control={control}
              name="eventDuration"
            />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <Textarea
          label="Event Description"
          placeholder="Write a summary about your event"
          className="h-40 resize-none"
          {...register('eventDescription')}
          disabled={isDisabled}
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
            disabled={isDisabled}
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
          onClick={() => navigate(0)}
          intent="secondary"
          type="button"
        >
          cancel
        </Button>
      </div>
    </form>
  )
}
