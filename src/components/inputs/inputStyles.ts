import { cva } from 'class-variance-authority'

const inputStyles = cva(
  [
    'font-normal',
    'border',
    'w-full',
    'rounded-md',
    'placeholder:text-[15px]',
    'placeholder:text-circle-placeholder',
    'border-secondary',
    'placeholder:font-normal',
    'focus:ring-inset',
    'focus:ring-1',
    'focus:ring-circle-blue-900',
    'disabled:cursor-not-allowed',
    'disabled:bg-gray-50',
    'disabled:text-gray-500',
    'disabled:ring-gray-200',
  ],
  {
    variants: {
      intent: {
        primary: ['text-circle-grey-shade-medium'],
        secondary: [
          'bg-white',
          'text-secondary',
          'border-secondary',
          'hover:bg-gray-100',
        ],
        error: [
          'bg-circle-alert-background',
          'border',
          'border-red-300',
          'ring-red-300',
          'focus:border-red-500',
          'focus:ring-red-500',
          'text-red-900',
          'ring-inset',
          'ring-1',

          'placeholder:text-red-300',
        ],
      },
      size: {
        small: ['text-sm', 'py-2', 'px-8'],
        medium: ['text-[15px]', 'px-3', 'py-2.5'],
      },
    },

    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  },
)

export { inputStyles }
