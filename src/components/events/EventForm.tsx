import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Button from '../buttons/Button'
import Input from '../inputs/Input'
import Textarea from '../inputs/Textarea'
import { EventProps } from '../../types/events'
import { useCallback, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import LocationRadioGroup from '../inputs/LocationRadioGroup'
import SelectMenu from '../inputs/SelectMenu'
import { useErrorBoundary } from 'react-error-boundary'
import NotificationContext from '../../context/NotificationContext'

import { useCreateEvent } from '@hooks/events/mutations/useCreateEvent'
import { useEditEvent } from '@hooks/events/mutations/useEditEvent'
import { Action } from '@reducers/actionReducer'

interface EventFormProps {
  event?: EventProps | null
  action: string
  dispatch: React.Dispatch<Action>
}

interface FormValues extends EventProps {
  domain: string // Domain is part of the form, but not used at this time (disabled)
}

export default function EventForm({ event, action, dispatch }: EventFormProps) {
  const navigate = useNavigate()
  const { mutate: createEventMutation, error: createEventError } =
    useCreateEvent()
  const { mutate: editEventMutation, error: editEventError } = useEditEvent()
  const { setShow, setNotificationType, setNotificationText } =
    useContext(NotificationContext)
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

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    if (isEdit) {
      editEventMutation(formData).then(() => {
        setShow(true)
        setNotificationType('success')
        setNotificationText('Event edited successfully')
        dispatch({ type: 'SET_ACTION', payload: 'view' })
      })
    } else {
      createEventMutation(formData).then((data) => {
        console.log('is data actually there?', data)
        setShow(true)
        setNotificationType('success')
        setNotificationText('Event created successfully')
        dispatch({ type: 'SET_ACTION', payload: 'view' })
      })
    }
  }

  const buttonText = isEdit ? 'Save Event' : 'Create Event'

  // Boolean used to disable form elements when viewing an event
  const isDisabled = isView

  if (createEventError) {
    showBoundary(createEventError)
  }

  if (editEventError) {
    showBoundary(editEventError)
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
            {...register('dateAndTime', {
              required: 'Date and time cannot be empty',
              validate: handleValidate,
            })}
            error={errors?.dateAndTime}
            intent={errors?.name && 'error'}
            disabled={isDisabled}
          />
          <div>
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
