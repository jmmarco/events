import { forwardRef } from 'react'
import { cn } from '../../helpers/utils'
import { buttonStyles } from './buttonStyles'

interface ButtonProps {
  className?: string
  children?: React.ReactNode
  intent?: 'primary' | 'secondary' | null | undefined
  size?: 'small' | 'medium'
  type: 'submit' | 'button' | 'reset'
}

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
