import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/utils'
import { buttonStyles } from './buttonStyles'



interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: 'primary' | 'secondary'
  size?: 'small' | 'medium'
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
