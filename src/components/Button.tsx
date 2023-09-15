import { forwardRef } from 'react'

interface ButtonProps {
  className: string
  children?: React.ReactNode
  type: 'submit' | 'button' | 'reset'
}
export type Ref = HTMLButtonElement

export const Button = forwardRef<Ref, ButtonProps>((props, ref) => (
  <button {...props} className={props.className} type={props.type} ref={ref}>
    {props.children}
  </button>
))

Button.displayName = 'Button'

export default Button
