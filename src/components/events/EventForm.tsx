import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Button from '../buttons/Button'
import Input from '../inputs/Input'
import Textarea from '../inputs/Textarea'
import { EventProps } from '../../types/events'
import { useCallback, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import LocationRadioGroup from '../inputs/LocationRadioGroup'
import SelectMenu from '../inputs/SelectMenu'
import { VITE_API_URL } from '../../constants'
import { useErrorBoundary } from 'react-error-boundary'
import LoaderContext from '../../context/LoaderContext'
import NotificationContext from '../../context/NotificationContext'

interface EventFormProps {
  event?: EventProps | null
  action: 'create' | 'edit' | 'view'
}

interface FormValues extends EventProps {
  domain: string // Domain is part of the form, but not used at this time (disabled)
}

export default function EventForm({ event, action }: EventFormProps) {
  const navigate = useNavigate()
  const { setLoading } = useContext(LoaderContext)
  const { setShow, setNotificationType, setNotificationText } =
    useContext(NotificationContext)
  const { showBoundary } = useErrorBoundary()
  const SIMULATED_NETWORK_DELAY = 2500
  // Conditional actions
  const isEdit = action === 'edit'
  const isView = action === 'view'
  const isCreate = action === 'create'

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      location: '',
      dateAndTime: '',
      duration: 1,
      description: '',
      customUrl: '',
    },
  })

  const getEventObject = useCallback(
    (event: EventProps) => ({
      name: event.name,
      location: event.location,
      dateAndTime: event.dateAndTime,
      duration: event.duration,
      description: event.description,
      customUrl: event.customUrl,
    }),

    [],
  )

  useEffect(() => {
    if (event) {
      reset({ ...getEventObject(event) })
    }
  }, [event, getEventObject, reset])

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    // Create and Edit API Endpoints
    const createEventEndpointUrl = `${VITE_API_URL}/events`
    const editEventEndpointUrl = `${VITE_API_URL}/events/${event?.id}`

    // Fetch parameters
    const url = isEdit ? editEventEndpointUrl : createEventEndpointUrl
    const method = isEdit ? 'PUT' : 'POST'

    setLoading(true)
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const data = await response.json()
      setNotificationType('success')
      setNotificationText('Event created successfully!')
      setShow(true)
      // setTimeout is emulating a network delay. In a production app this would be removed
      setTimeout(() => {
        setLoading(false)
        setShow(false)
        // Reload or navigate based on action
        isEdit && navigate(0)
        isCreate && navigate(`/events/${data.id}`, { preventScrollReset: true })
      }, SIMULATED_NETWORK_DELAY)
    } catch (error) {
      console.error(error)
      showBoundary(error)
    }
  }

  const buttonText = isEdit ? 'Save Event' : 'Create Event'

  // Boolean used to disable form elements when viewing an event
  const isDisabled = isView

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex flex-col gap-y-12 py-14"
    >
      <div className="space-y-2">
        <Input
          type="text"
          label="Event Name"
          {...register('name', { required: 'Event name is required' })}
          error={errors?.name}
          disabled={isDisabled}
          intent={errors?.name && 'error'}
        />
      </div>
      <div className="space-y-2">
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          <Controller
            render={({ field }) => (
              <LocationRadioGroup
                {...field}
                disabled={isDisabled}
                error={errors?.location}
              />
            )}
            control={control}
            name="location"
            rules={{
              required: 'Where is required',
            }}
          />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-[20px] font-semibold tracking-[0.3px]">When</h2>
        <div className="grid grid-cols-2 gap-x-2">
          <Input
            type="datetime-local"
            label="Set date and time"
            {...register('dateAndTime')}
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
              name="duration"
            />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <Textarea
          label="Event Description"
          placeholder="Write a summary about your event"
          className="h-40 resize-none"
          {...register('description')}
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
            {...register('domain')}
          />
          <Input
            type="text"
            label="Event URL"
            hideLabel
            className="basis-3/4 rounded-l-none"
            placeholder="custom URL"
            grow
            {...register('customUrl')}
            disabled={isDisabled}
          />
        </div>
      </fieldset>
      <div className="inline-flex gap-x-2">
        {isCreate ||
          (isEdit && (
            <>
              <Button
                className="place-self-start capitalize"
                type="submit"
                disabled={!isDirty || !isValid}
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
            </>
          ))}
      </div>
    </form>
  )
}
