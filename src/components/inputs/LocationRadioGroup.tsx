import { forwardRef } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { cn } from '../../helpers/utils'

const possibleLocations = [
  {
    id: 'virtual',
    title: 'Virtual',
    description:
      'Virtual events are typically held using online meeting technologies such as Google Meets, Microsoft Teams, Zoom, etc.',
  },
  {
    id: 'inPerson',
    title: 'In Person',
    description:
      'In person events are typically held in public or private venues such as convention centers, theatres, shops, etc.',
  },
]

interface LocationRadioGroupProps {
  disabled: boolean
  value: string
  onChange: (location: string) => void
}

export type Ref = HTMLInputElement

const LocationRadioGroup = forwardRef<Ref, LocationRadioGroupProps>(
  ({ disabled, ...props }, ref) => {
    const selectedValueObject = possibleLocations.find(
      (location) => location.title === props.value,
    )
    return (
      <RadioGroup
        ref={ref}
        value={selectedValueObject}
        onChange={(v) => {
          props.onChange(v.title)
        }}
        disabled={disabled}
      >
        <RadioGroup.Label className="text-[20px] font-semibold tracking-[0.3px]">
          Where
        </RadioGroup.Label>
        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 ">
          {possibleLocations.map((location) => (
            <RadioGroup.Option
              key={location.id}
              value={location}
              className={({ active }) =>
                cn(
                  active
                    ? 'border-circle-blue-900 ring-2 ring-circle-blue-900'
                    : 'border-gray-300',
                  disabled
                    ? 'cursor-not-allowed bg-gray-50 opacity-50'
                    : 'cursor-pointer',
                  'relative flex  flex-col items-center justify-center rounded-lg border bg-white p-4 pb-6 shadow-sm focus:outline-none disabled:cursor-not-allowed',
                )
              }
            >
              {({ checked, active }) => (
                <>
                  <CheckCircleIcon
                    className={cn(
                      !checked ? 'invisible' : '',
                      'h-5 w-5 self-end text-circle-blue-900',
                    )}
                    aria-hidden="true"
                  />
                  <img
                    className="mx-auto h-20 w-20"
                    src={
                      location.title === 'Virtual'
                        ? '/event-virtual-logo.svg'
                        : '/event-in-person.svg'
                    }
                    alt="Event Location Logo"
                  />
                  <span className="flex flex-1">
                    <span className="flex flex-col items-center">
                      <RadioGroup.Label
                        as="span"
                        className="block text-sm font-medium text-gray-900"
                      >
                        {location.title}
                      </RadioGroup.Label>
                      <RadioGroup.Description
                        as="span"
                        className="mt-1 flex text-center text-xs text-gray-500"
                      >
                        {location.description}
                      </RadioGroup.Description>
                    </span>
                  </span>
                  <span
                    className={cn(
                      active ? 'border' : 'border-2',
                      checked ? 'border-circle-blue-900' : 'border-transparent',
                      'pointer-events-none absolute -inset-px rounded-lg',
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    )
  },
)

LocationRadioGroup.displayName = 'LocationRadioGroup'

export default LocationRadioGroup
