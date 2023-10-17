import { cn } from "@helpers/utils"


export interface EventMainProps {
  children?: React.ReactNode
  className?: string
}

export default function EventMain({ children, className }: EventMainProps) {
  return (
    <main className={cn('mx-auto max-w-2xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </main>
  )
}
