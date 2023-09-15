import { ChildrenProps } from '../../types/global'

export default function EventMain({ children }: ChildrenProps) {
  return (
    <main className="bg-grey-dark mx-auto max-w-7xl sm:px-6 lg:px-8">
      {children}
    </main>
  )
}
