import { Outlet } from 'react-router'

interface LayoutProps {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      {children}
      <Outlet />
    </div>
  )
}
