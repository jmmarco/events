import { cn } from '../../helpers/utils'
import { ChildrenProps } from '../../types/global'

export default function EventMain({ children, className }: ChildrenProps) {
  return (
    <main className={cn('mx-auto max-w-2xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </main>
  )
}
