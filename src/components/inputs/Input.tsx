import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

import { forwardRef } from 'react'

interface InputProps {
  className?: string
  error?: string
  label?: string
  type: 'submit' | 'text'
}

export type Ref = HTMLInputElement

export const Input = forwardRef<Ref, InputProps>((props, ref) => (
  <div>
    <label
      htmlFor="email"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {props.label}
    </label>
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        {...props}
        className="block w-full rounded-md border-0 px-3 py-2 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
        type={props.type}
        ref={ref}
      />
      {props.error && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      )}
    </div>
    {props.error && <p className="mt-2 text-sm text-red-600">{props.error}</p>}
  </div>
))

Input.displayName = 'Input'

export default Input
