import { ButtonHTMLAttributes, forwardRef } from 'react'
import { buttonStyles } from './buttonStyles'
import { cn } from '@helpers/utils'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: 'primary' | 'secondary'
  size?: 'small' | 'medium'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
