import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 text-gray-900">
      <Outlet />
    </div>
  )
}
