import { forwardRef } from 'react'
import { cn } from '../../helpers/utils'
import { cva } from 'class-variance-authority'

interface ButtonProps {
  className?: string
  children?: React.ReactNode
  intent?: 'primary' | 'secondary' | null | undefined
  size?: 'small' | 'medium'
  type: 'submit' | 'button' | 'reset'
}

const buttonStyles = cva(
  [
    'font-semibold',
    'border',
    'rounded-md',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-circle-blue-900',
  ],
  {
    variants: {
      intent: {
        primary: [
          'bg-circle-blue-900',
          'text-white',
          'border-transparent',
          'hover:bg-circle-blue-800',
        ],
        // **or**
        // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
        secondary: [
          'bg-white',
          'text-secondary',
          'border-secondary',
          'hover:bg-gray-100',
        ],
      },
      size: {
        small: ['text-sm', 'py-2', 'px-8'],
        medium: ['text-base', 'py-2.5', 'px-6'],
      },
    },

    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  },
)

export type Ref = HTMLButtonElement

export const Button = forwardRef<Ref, ButtonProps>(
  ({ className, size, intent, ...props }, ref) => (
    <button
      {...props}
      className={cn(buttonStyles({ intent, size, className }))}
      ref={ref}
    >
      {props.children}
    </button>
  ),
)

Button.displayName = 'Button'

export default Button
