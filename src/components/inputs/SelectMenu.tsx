import { Fragment, forwardRef, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { cn } from '../../helpers/utils'

interface SelectMenuProps<T> {
  disabled?: boolean
  hideLabel?: boolean
  label: string
  value?: string
  items: Array<T>
}

export type Ref = HTMLSelectElement

const SelectMenu = forwardRef<Ref, SelectMenuProps<number | string>>(
  ({ disabled, ...props }, ref) => {
    const [selected, setSelected] = useState(null)

    return (
      <Listbox
        value={selected}
        onChange={setSelected}
        ref={ref}
        disabled={disabled}
      >
        {({ open }) => (
          <>
            <Listbox.Label
              className={cn(
                'sr-only block text-sm font-medium text-circle-grey-shade-medium',
                props.hideLabel && 'sr-only',
              )}
            >
              {props.label}
            </Listbox.Label>
            <div className="relative mt-2">
              <Listbox.Button
                className="disabled:ring-gray-200 relative w-full cursor-default rounded-md border border-secondary bg-white px-3 py-2.5 text-left focus:ring-2 focus:ring-inset focus:ring-circle-blue-900
    disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              >
                <span
                  className={cn(
                    'block truncate',
                    selected ? 'text-secondary' : 'text-circle-placeholder',
                  )}
                >
                  {selected || props.label}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className=" absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white py-1 text-[15px] shadow-lg focus:outline-none sm:text-sm">
                  {props.items.map((item) => (
                    <Listbox.Option
                      key={item}
                      className={({ active }) =>
                        cn(
                          active
                            ? 'bg-circle-blue-900 text-white'
                            : 'text-secondary',
                          'relative cursor-default select-none py-2 pl-3 pr-9',
                        )
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={cn(
                              selected ? 'font-semibold' : 'font-normal',
                              'block truncate',
                            )}
                          >
                            {item}
                          </span>

                          {selected ? (
                            <span
                              className={cn(
                                active ? 'text-white' : 'text-circle-blue-900',
                                'absolute inset-y-0 right-0 flex items-center pr-2',
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    )
  },
)

SelectMenu.displayName = 'SelectMenu'

export default SelectMenu
