import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

import { forwardRef } from 'react'
import { cn } from '../../helpers/utils'
import { inputStyles } from './inputStyles'

interface InputProps {
  className?: string
  disabled?: boolean
  error?: string
  grow?: boolean
  intent?: 'primary' | 'secondary' | null | undefined
  label?: string
  name: string
  placeholder?: string
  size?: 'small' | 'medium'
  type: 'text' | 'email' | 'date'
  value?: string
}

export type Ref = HTMLInputElement

export const Input = forwardRef<Ref, InputProps>(
  (
    {
      className,
      error,
      grow,
      intent,
      label,
      name,
      placeholder,
      size,
      type,
      ...props
    },
    ref,
  ) => (
    <div className={cn(grow && 'grow')}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-circle-grey-shade-medium"
      >
        {label}
      </label>
      <div className="relative mt-2">
        <input
          {...props}
          className={cn(inputStyles({ intent, size, className }))}
          placeholder={label || placeholder}
          type={type}
          ref={ref}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  ),
)

Input.displayName = 'Input'

export default Input
