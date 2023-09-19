import { Outlet } from 'react-router'
import { ChildrenProps } from '../types/global'

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className="h-screen text-circle-grey-shade-dark">
      {children}
      <Outlet />
    </div>
  )
}
