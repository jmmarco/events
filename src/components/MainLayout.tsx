import { Outlet } from 'react-router'
import { ChildrenProps } from '../types/global'
import Loader from './Loader'
import LoaderContext from './LoaderContext'
import useLoading from '../hooks/useLoading'

export default function Layout({ children }: ChildrenProps) {
  const value = useLoading()

  return (
    <div className="relative h-full text-circle-grey-shade-dark">
      <LoaderContext.Provider value={value}>
        {children}
        <Outlet />
        <Loader />
      </LoaderContext.Provider>
    </div>
  )
}
