import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

import { forwardRef } from 'react'
import { cn } from '../../helpers/utils'
import { inputStyles } from './inputStyles'
import { FieldError } from 'react-hook-form'

interface InputProps {
  className?: string
  disabled?: boolean
  error?: FieldError
  grow?: boolean
  hideLabel?: boolean
  intent?: 'primary' | 'secondary' | 'error' | null | undefined
  label: string
  name: string
  placeholder?: string
  size?: 'small' | 'medium'
  type: 'text' | 'email' | 'date' | 'datetime-local'
  value?: string
}

export type Ref = HTMLInputElement

export const Input = forwardRef<Ref, InputProps>(
  ({ className, grow, hideLabel, intent, size, ...props }, ref) => (
    <div className={cn(grow && 'grow')}>
      <label
        htmlFor={props.name}
        className={cn(
          'block text-sm font-medium text-circle-grey-shade-medium',
          hideLabel && 'sr-only',
        )}
      >
        {props.label}
      </label>
      <div className="relative mt-2">
        <input
          {...props}
          id={props.name}
          className={cn(inputStyles({ intent, size, className }))}
          placeholder={props.placeholder || props.label}
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
      {props.error && (
        <p className="mt-2 text-[12px] text-circle-alert-color">
          {props.error.message}
        </p>
      )}
    </div>
  ),
)

Input.displayName = 'Input'

export default Input
