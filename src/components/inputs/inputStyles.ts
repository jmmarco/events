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
    'focus:ring-1',
    'focus:ring-inset',
    'focus:ring-circle-blue-900',
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
      },
      size: {
        small: ['text-sm', 'py-2', 'px-8'],
        medium: ['text-[15px]', 'px-3', 'py-2.5', 'pr-10'],
      },
    },

    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  },
)

export { inputStyles }
