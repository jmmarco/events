import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Input from '@components/inputs/Input'
import Button from '@components/buttons/Button'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useErrorBoundary } from 'react-error-boundary'
import Textarea from '@components/inputs/Textarea'
import SelectMenu from '@components/inputs/SelectMenu'
import { useEditEvent } from '@hooks/events/mutations/useEditEvent'
import LocationRadioGroup from '@components/inputs/LocationRadioGroup'
import useNotification from '@hooks/useNotification'
import { EventFormProps, EventProps } from '@customTypes/index'
import { useCreateEvent } from '@hooks/events/mutations/useCreateEvent'

export default function EventForm({ event, action, dispatch }: EventFormProps) {
  const navigate = useNavigate()
  const { mutate: editEvent, error: editEventError } = useEditEvent()
  const { mutate: createEvent, error: createEventError } = useCreateEvent()
  const { dispatchNotification } = useNotification()
  const { showBoundary } = useErrorBoundary()
  // Conditional actions
  const isEdit = action === 'edit'
  const isView = action === 'view'
  const isCreate = action === 'create'

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: 0,
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
      id: event.id,
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

  const handleValidate = (value: string) => {
    const dateTimeValue = new Date(value)
    const today = new Date()

    if (dateTimeValue < today) {
      return 'Cannot be in the past'
    }

    return true
  }

  const onSubmit: SubmitHandler<EventProps> = async (formData) => {
    if (isEdit) {
      console.log('formData:', formData)
      editEvent(formData, {
        onSuccess: () => {
          dispatchNotification({
            type: 'SHOW',
            payload: {
              text: 'Event edited successfully',
              notificationType: 'success',
            },
          })
          dispatch({ type: 'SET_ACTION', payload: 'view' })
        },
      })
    }

    if (isCreate) {
      createEvent(formData, {
        onSuccess: () => {
          dispatchNotification({
            type: 'SHOW',
            payload: {
              text: 'Event created successfully',
              notificationType: 'success',
            },
          })
          dispatch({ type: 'SET_ACTION', payload: 'view' })
        },
      })
    }
  }

  const buttonText = isEdit ? 'Save Event' : 'Create Event'

  if (editEventError) {
    showBoundary(editEventError)
  }

  if (createEventError) {
    showBoundary(createEventError)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-12 py-14"
    >
      <div className="space-y-2">
        <Input
          type="text"
          label="Event Name"
          {...register('name', { required: 'Event name is required' })}
          error={errors?.name}
          disabled={isView}
          intent={errors?.name && 'error'}
        />
      </div>
      <div className="space-y-2">
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          <Controller
            render={({ field }) => (
              <LocationRadioGroup
                {...field}
                disabled={isView}
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
            {...register('dateAndTime', {
              required: 'Date and time cannot be empty',
              validate: handleValidate,
            })}
            error={errors?.dateAndTime}
            intent={errors?.name && 'error'}
            disabled={isView}
          />
          <div>
            <Controller
              render={({ field }) => (
                <SelectMenu
                  {...field}
                  label="Duration"
                  disabled={isView}
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
          label="Description"
          placeholder="Write a summary about your event"
          className="h-40 resize-none"
          {...register('description')}
          disabled={isView}
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
          />
          <Input
            type="text"
            label="Custom URL"
            hideLabel
            className="basis-3/4 rounded-l-none"
            placeholder="custom URL"
            grow
            {...register('customUrl')}
            disabled={isView}
          />
        </div>
      </fieldset>
      <div className="inline-flex gap-x-2">
        {(isCreate || isEdit) && (
          <>
            <Button className="place-self-start capitalize" type="submit">
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
        )}
      </div>
    </form>
  )
}
