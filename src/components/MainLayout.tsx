import { Outlet } from 'react-router'
import { ChildrenProps } from '../types/global'

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className="text-circle-grey-shade-dark h-screen">
      {children}
      <Outlet />
    </div>
  )
}
