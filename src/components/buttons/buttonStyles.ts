import { cva } from 'class-variance-authority'

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

export { buttonStyles }
