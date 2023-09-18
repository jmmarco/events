import { ChildrenProps } from '../../types/global'

export default function EventMain({ children }: ChildrenProps) {
  return (
    <main className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">{children}</main>
  )
}
