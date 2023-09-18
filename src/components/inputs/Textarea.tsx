import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

import { forwardRef } from 'react'
import { cn } from '../../helpers/utils'
import { inputStyles } from './inputStyles'

interface TextareaProps {
  className?: string
  error?: string
  intent?: 'primary' | 'secondary' | null | undefined
  label?: string
  name: string
  placeholder?: string
  size?: 'small' | 'medium'
  value?: string
}

export type Ref = HTMLTextAreaElement

export const Textarea = forwardRef<Ref, TextareaProps>(
  (
    { className, error, intent, label, name, placeholder, size, ...props },
    ref,
  ) => (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-circle-grey-shade-medium"
      >
        {label}
      </label>
      <div className="relative mt-2">
        <textarea
          {...props}
          className={cn(inputStyles({ intent, size, className }))}
          placeholder={placeholder || label}
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

Textarea.displayName = 'Textarea'

export default Textarea
